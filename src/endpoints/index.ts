import { FastifyRequest, FastifyReply } from "fastify";

interface Query {
  echo: string;
}

export const indexHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {

  const { echo } = request.query as Query;

  // console.time("decode base64")
  // const userInfo = decodeUserInfo(request)
  // console.timeEnd("decode base64")

  return { echo, timestamp: new Date(), user: request.user }

}

