import Fastify from "fastify";
import cors from "fastify-cors"

import { indexHandler } from "./endpoints/index"

export const app = Fastify({ logger: true });

app.register(cors, { 
  origin: "http://localhost:3000"
})

app.get("/", indexHandler);

