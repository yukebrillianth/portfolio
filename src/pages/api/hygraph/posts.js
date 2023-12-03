import { verifyWebhookSignature } from '@hygraph/utils'
import { PrismaClient } from '../../../../prisma/generated/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const secret = process.env.NEXT_PUBLIC_HYGRAPH_WEBHOOK_SECRET;
    const body = req.body;
    const signature = req.headers['gcms-signature'];

    console.log(req.method)

    if (req.method === 'POST') {
        // check signature
        if (!signature || !body) {
            return res.status(400).json({ success: false, code: 400, message: "Bad Request" })
        }
        // validate signature
        const isValid = verifyWebhookSignature({ body, signature, secret });
        if (isValid) {
            console.log(body)
            switch (body.operation) {
                case "create":
                    try {
                        await prisma.blogPosts.create({
                            data: {
                                id: body.data.id,
                                title: body.data.title,
                                categoryId: body.data.category.id,
                                content: JSON.stringify(body.data.content.raw),
                                coverImage: body.data.coverImage.id,
                                publishedAt: body.data.publishedAt,
                                slug: body.data.slug,
                                stage: body.data.stage,
                                date: new Date(body.data.date).toISOString(),
                                excerpt: body.data.excerpt
                            }
                        });
                        return res.status(201).json({ success: true, code: 201, message: 'created!' })
                    } catch (err) {
                        console.error("[Webhook]", err)
                        return res.status(500).json({ success: false, status: 500, message: "error", errors: err });
                    }
                case "update":
                    try {
                        await prisma.blogPosts.update({
                            where: {
                                id: body.data.id
                            },
                            data: {
                                id: body.data.id,
                                title: body.data.title,
                                categoryId: body.data.category.id,
                                content: JSON.stringify(body.data.content.raw),
                                coverImage: body.data.coverImage.id,
                                publishedAt: body.data.publishedAt,
                                slug: body.data.slug,
                                stage: body.data.stage,
                                date: new Date(body.data.date).toISOString(),
                                excerpt: body.data.excerpt
                            }
                        });
                        return res.status(201).json({ success: true, code: 201, message: 'updated!' })
                    } catch (err) {
                        console.error("[Webhook]", err)
                        return res.status(500).json({ success: false, status: 500, message: "error", errors: err });
                    }
                case "delete":
                    try {
                        await prisma.blogPosts.update({
                            where: {
                                id: body.data.id
                            },
                            data: {
                                deleted: true
                            }
                        });
                        return res.status(201).json({ success: true, code: 201, message: 'deleted!' })
                    } catch (err) {
                        console.error("[Webhook]", err)
                        return res.status(500).json({ success: false, status: 500, message: "error", errors: err });
                    }
                default:
                    return res.status(400).json({ success: false, code: 400, error: "Bad Request", message: 'unknown operation' })
            }
        } else {
            return res.status(403).json({ success: false, code: 403, error: { message: "Forbidden!", path: req.url } });
        }
    } else {
        return res.status(405).json({ success: false, code: 405, error: { message: "Method not allowed!", path: req.url } });
    }
}