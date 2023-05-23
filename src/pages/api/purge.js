// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from "../../../apollo-client";
import { useApolloClient } from "@apollo/client";

export default async function purge(req, res) {
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Bad request method' })
    } else {
        client.resetStore();
        client.cache.reset();
        client.clearStore();
        res.status(200).json({ status: 'ok', message: 'Purge cache success' })
    }
}
