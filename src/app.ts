import Fastify from "fastify";

// Types
import { Request } from "./Types/Request"

// Plugins
import cors from "fastify-cors"
import { DecodeUser } from "./Plugins/DecodeUser"

// Handlers
import { indexHandler } from "./endpoints/index"


export const app = Fastify({ logger: true });

app.register(cors, { 
  origin: "http://localhost:3000"
})

app.register(DecodeUser, {})

app.get("/", indexHandler);

