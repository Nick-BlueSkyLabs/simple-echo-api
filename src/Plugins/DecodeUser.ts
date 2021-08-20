import { FastifyInstance } from "fastify";
import fp from 'fastify-plugin';

import { Request } from "../Types/Request"

interface Options {

}

export const DecodeUser = fp((fastify: FastifyInstance, opts: Options, next: any) => {

  fastify.addHook("preHandler", (request: Request, reply, done) => {
    // add user to request object 
    fastify.decorateRequest("user", {})
    const userInfo = decodeUserInfo(request)
    request.user = userInfo
    console.log({ userInfo })

    done()
  })
  
  next();
}, {})

const decodeUserInfo = (request: Request) => {
  const userInfoBase64 = request.headers["x-apigateway-api-userinfo"] as string
  const userInfoString = Buffer.from(userInfoBase64, 'base64').toString('ascii')
  const userInfo = JSON.parse(userInfoString)
  return userInfo
}


