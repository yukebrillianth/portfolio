import requestIp from 'request-ip'
import { PrismaClient } from '../../../prisma/generated/client'
const prisma = new PrismaClient()

export default async function handler(req, res) {
    const detectedIp = requestIp.getClientIp(req);
    switch (req.method) {
        case "POST":
            res.status(201).json({ success: true, code: 201, message: "Comment submited for review!", uip: detectedIp });
            break;

        case "GET":
            const comments = await prisma.comments.findMany();
            res.status(200).json({ success: true, code: 200, message: "Success get all post comments", data: comments });
            break;

        default:
            res.status(405).json({ success: false, code: 405, error: { message: "Method not allowed!", path: req.url } });
            break;
    }
}