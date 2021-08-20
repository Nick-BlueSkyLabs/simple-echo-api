import Fastify, { FastifyRequest } from "fastify";
import cors from "fastify-cors"

import { indexHandler } from "./endpoints/index"

export const app = Fastify({ logger: true });

app.register(cors, { 
  origin: "http://localhost:3000"
})

app.register(async (fastify, opts) => {
  fastify.addHook("preHandler", async (request: FastifyRequest, reply) => {
    const userInfo = decodeUserInfo(request)
    request.headers.user = userInfo
    return;
  });
  return;
}, {})

const decodeUserInfo = (request: FastifyRequest) => {
  const userInfoBase64 = request.headers["x-apigateway-api-userinfo"] as string
  const userInfoString = Buffer.from(userInfoBase64, 'base64').toString('ascii')
  const userInfo = JSON.parse(userInfoString)
  return userInfo
}

app.get("/", indexHandler);

