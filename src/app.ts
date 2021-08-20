import Fastify from "fastify";
import cors from "fastify-cors"

import { Request } from "./Types/Request"

import { indexHandler } from "./endpoints/index"

import { DecodeUser } from "./Plugins/DecodeUser"

export const app = Fastify({ logger: true });

app.register(cors, { 
  origin: "http://localhost:3000"
})

app.register(DecodeUser, {})

app.get("/", indexHandler);

