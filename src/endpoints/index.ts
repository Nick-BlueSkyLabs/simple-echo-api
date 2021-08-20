import { FastifyRequest, FastifyReply } from "fastify";

interface Query {
  echo: string;
}

export const indexHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {

  const { echo } = request.query as Query;

  const { headers } = request

  return { echo, timestamp: new Date(), headers }

}