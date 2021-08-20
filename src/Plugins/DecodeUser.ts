import { FastifyInstance } from "fastify";

import { Request } from "../Types/Request"

interface Options {

}

export const DecodeUser = (fastify: FastifyInstance, opts: Options, done) => {

  fastify.addHook("preHandler", (request: Request, reply, done) => {
    // add user to request object 
    fastify.decorateRequest("user", decodeUserInfo(request))
    // request.user = 

    done();
  })
  
  done()
}

const decodeUserInfo = (request: Request) => {
  const userInfoBase64 = request.headers["x-apigateway-api-userinfo"] as string
  const userInfoString = Buffer.from(userInfoBase64, 'base64').toString('ascii')
  const userInfo = JSON.parse(userInfoString)
  return userInfo
}


