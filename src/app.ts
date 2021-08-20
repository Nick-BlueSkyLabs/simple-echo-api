import Fastify from "fastify";

// Types
import { Request } from "./Types/Request"

// Plugins
import cors from "fastify-cors"

// Hooks
import { decodeUser } from './Hooks/decodeUser';

// Handlers
import { indexHandler } from "./endpoints/index"

// create fastify instance
export const app = Fastify({ logger: true });

app.register(cors, { 
  origin: "http://localhost:3000"
})

// decode user base64 string from api gateway on every request
app.decorateRequest("user", {})
app.addHook("preHandler", decodeUser)

// register route handlers
app.get("/", indexHandler);
