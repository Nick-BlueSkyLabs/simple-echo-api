import Fastify from "fastify";

// Types
import { Request } from "./Types/Request"

// Plugins
import cors from "fastify-cors"
// import { DecodeUser } from "./Plugins/DecodeUser"

// Handlers
import { indexHandler } from "./endpoints/index"


export const app = Fastify({ logger: true });

app.register(cors, { 
  origin: "http://localhost:3000"
})

// app.register(DecodeUser, {})

app.decorateRequest("user", {})

app.addHook("preHandler", (request: Request, reply, done) => {
  // add user to request object 
  const userInfo = decodeUserInfo(request)
  request.user = userInfo
  console.log({ userInfo })

  done()
})

const decodeUserInfo = (request: Request) => {
  const userInfoBase64 = request.headers["x-apigateway-api-userinfo"] as string
  const userInfoString = Buffer.from(userInfoBase64, 'base64').toString('ascii')
  const userInfo = JSON.parse(userInfoString)
  return userInfo
}

app.get("/", indexHandler);

