import { FastifyInstance } from "fastify";

import { Request } from "../Types/Request"

interface Options {

}

export const DecodeUser = async (fastify: FastifyInstance, opts: Options) => {

  fastify.addHook("preHandler", async (request: Request, reply) => {
    // add user to request object 
    fastify.decorateRequest("user", decodeUserInfo(request))
    // request.user = 

    return;
  })
  
  return;
}

const decodeUserInfo = (request: Request) => {
  const userInfoBase64 = request.headers["x-apigateway-api-userinfo"] as string
  const userInfoString = Buffer.from(userInfoBase64, 'base64').toString('ascii')
  const userInfo = JSON.parse(userInfoString)
  return userInfo
}


