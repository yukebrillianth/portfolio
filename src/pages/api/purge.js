// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from "../../../apollo-client";

export default function purge(req, res) {
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Bad request method' })
    } else {
        try {
            async () => client.clearStore()
            res.status(200).json({ status: 'ok', message: 'Purge cache success' })
        } catch {
            res.status(500).json({ status: 'error' })
        }
    }
}
