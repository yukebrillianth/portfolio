import { verifyWebhookSignature } from '@hygraph/utils'

export default function handler(req, res) {
    const secret = process.env.NEXT_PUBLIC_HYGRAPH_WEBHOOK_SECRET;
    const body = req.body;
    const signature = req.headers['gcms-signature'];

    switch (req.method) {
        case 'POST':
            // check signature
            if (!signature || !body) {
                return res.status(400).json({ success: false, code: 400, message: "Bad Request" })
            }

            // validate signature
            const isValid = verifyWebhookSignature({ body, signature, secret });
            if (isValid) {
                if (body.operation === "publish")
                    return res.status(201).json({ success: true, code: 201, message: 'created!' })
            } else {
                return res.status(403).json({ success: false, code: 403, error: { message: "Forbidden!", path: req.url } });
            }
        default:
            return res.status(405).json({ success: false, code: 405, error: { message: "Method not allowed!", path: req.url } });
    }
}