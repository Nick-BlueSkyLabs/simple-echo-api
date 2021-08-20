import { FastifyReply, HookHandlerDoneFunction } from "fastify";
import { Request } from "../Types/Request"

export const decodeUser = (request: Request, reply: FastifyReply, done: HookHandlerDoneFunction) => {

  // add user to request object 
  request.user = decodeUserInfo(request)

  done()
}

const decodeUserInfo = (request: Request) => {

  // get token from header
  const userInfoBase64 = request.headers["x-apigateway-api-userinfo"] as string

  // decode user info from base64
  const userInfoString = Buffer.from(userInfoBase64, 'base64').toString('ascii')

  // parse user info string to json
  const userInfo = JSON.parse(userInfoString)

  // return user info
  return userInfo
}