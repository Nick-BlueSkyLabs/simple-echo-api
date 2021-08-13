import Fastify from "fastify";

import { indexHandler } from "./endpoints/index"

export const app = Fastify({ logger: true });

app.get("/", indexHandler);

