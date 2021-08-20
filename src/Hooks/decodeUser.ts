import { FastifyReply, HookHandlerDoneFunction } from "fastify";
import { Request } from "../Types/Request"

export const decodeUser = (request: Request, reply: FastifyReply, done: HookHandlerDoneFunction) => {
  // add user to request object 
  const userInfo = decodeUserInfo(request)
  request.user = userInfo
  console.log({ userInfo })

  done()
}

const decodeUserInfo = (request: Request) => {
  const userInfoBase64 = request.headers["x-apigateway-api-userinfo"] as string
  const userInfoString = Buffer.from(userInfoBase64, 'base64').toString('ascii')
  const userInfo = JSON.parse(userInfoString)
  return userInfo
}