import { PrismaClient } from "../../../prisma/generated/client";
import { clerkClient } from "@clerk/nextjs";
import { Webhook } from "svix";

const prisma = new PrismaClient()

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405);
    }
    // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
    const WEBHOOK_SECRET = process.env.NEXT_PUBLIC_CLERK_USER_WEBHOOK_SECRET;

    if (!WEBHOOK_SECRET) {
        throw new Error(
            "Please add NEXT_PUBLIC_CLERK_USER_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
        );
    }

    // Get the headers
    const svix_id = req.headers["svix-id"];
    const svix_timestamp = req.headers["svix-timestamp"];
    const svix_signature = req.headers["svix-signature"];

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
        return res.status(400).json({ error: "Error occured -- no svix headers" });
    }

    console.log("headers", req.headers, svix_id, svix_signature, svix_timestamp);
    // Get the body
    const body = JSON.stringify(req.body);

    // Create a new Svix instance with your secret.
    const wh = new Webhook(WEBHOOK_SECRET);

    let evt;

    // Verify the payload with the headers
    try {
        evt = wh.verify(body, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature,
        });
    } catch (err) {
        console.error("Error verifying webhook:", err);
        return res.status(400).json({ Error: err });
    }

    // Get the ID and type
    const { id, email_addresses, first_name, last_name, username, profile_image_url } = evt.data;
    const eventType = evt.type;

    switch (eventType) {
        case "user.created":
            try {
                const user = await prisma.users.create({
                    data: {
                        email: email_addresses[0].email_address,
                        externalId: id,
                        first_name,
                        last_name,
                        username,
                        profile_image_url,
                        Subscription: {
                            create: {
                                plan: {
                                    connect: {
                                        slug: process.env.NEXT_PUBLIC_DEFAULT_PLAN
                                    }
                                },
                                isActive: true
                            }
                        }
                    }
                })
                await clerkClient.users.updateUserMetadata(id, {
                    publicMetadata: {
                        plan: process.env.NEXT_PUBLIC_DEFAULT_PLAN
                    }
                })

                return res.status(201).json({ success: true, status: 201, message: "success create a new user!" });
            } catch (err) {
                console.error("[Webhook]", err)
                return res.status(500).json({ success: false, status: 500, message: "error", errors: err });
            }
        case "user.updated":
            try {
                console.log(evt)
                await prisma.users.updateMany({
                    where: {
                        externalId: id
                    },
                    data: {
                        email: email_addresses[0].email_address,
                        first_name,
                        last_name,
                        username,
                        profile_image_url
                    }
                })
                return res.status(201).json({ success: true, status: 201, message: "success update user data!" });
            } catch (err) {
                console.error("[Webhook]", err)
                return res.status(500).json({ success: false, status: 500, message: "error", errors: err });
            }
        case "user.deleted":
            try {
                console.log(evt)
                await prisma.users.updateMany({
                    where: {
                        externalId: id
                    },
                    data: {
                        deleted: evt.data.deleted
                    }
                })
                return res.status(201).json({ success: true, status: 201, message: "success update user data!" });
            } catch (err) {
                console.error("[Webhook]", err)
                return res.status(500).json({ success: false, status: 500, message: "error", errors: err });
            }
    }

    console.log(`Webhook with and ID of ${id} and type of ${eventType}`);
    console.log("Webhook body:", body);

    return res.status(200).json({ response: "Success" });
}
