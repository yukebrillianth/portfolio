// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import requestIp from 'request-ip'

export default function helloAPI(req, res) {
  const detectedIp = requestIp.getClientIp(req)
  res.status(200).json({ name: 'John Doe', uip: detectedIp })
}
