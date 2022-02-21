import requestIp from 'request-ip'

export default function comment(req, res) {
    const detectedIp = requestIp.getClientIp(req);
    switch (req.method) {
        case "POST":
            res.status(201).json({ success: true, code: 201, message: "Comment submited for review!", uip: detectedIp });
            break;

        default:
            res.status(405).json({ success: false, code: 405, error: { message: "Method not allowed!", path: req.url } });
            break;
    }
}