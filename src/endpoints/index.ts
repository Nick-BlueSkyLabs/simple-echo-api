import { FastifyRequest, FastifyReply } from "fastify";
import crypto from "crypto"

interface Query {
  echo: string;
}

export const indexHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {

  const { echo } = request.query as Query;

  console.time("decode base64")
  const userInfoBase64 = request.headers["x-apigateway-api-userinfo"] as string
  const userInfo = Buffer.from(userInfoBase64, 'base64').toString('ascii')
  console.timeEnd("decode base64")

  return { echo, timestamp: new Date(), userInfo }

}