import { FastifyRequest, FastifyReply } from "fastify";
import { Request } from "../Types/Request"

interface Query {
  echo: string;
}

export const indexHandler = async (
  request: Request,
  reply: FastifyReply
) => {

  const { echo } = request.query as Query;
  const { user } = request;

  return { echo, timestamp: new Date(), user }

}

