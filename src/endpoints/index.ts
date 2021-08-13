import { FastifyRequest, FastifyReply } from "fastify";

interface Query {
  echo: string;
}

export const indexHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {

  const { echo } = request.query as Query;

  return { echo, timestamp: new Date() }

}