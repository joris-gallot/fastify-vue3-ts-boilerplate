import { FastifyInstance } from "fastify"
import { HelloDto, HelloSchema } from "./dto/hello.dto.js"

export default async (fastify: FastifyInstance) => {
  fastify.get<{ Reply: HelloDto }>(
    '/',
    {
      schema: {
        response: {
          200: HelloSchema
        }
      }
    },
    async (request, reply) => {
      reply.status(200).send({
        message: 'Hello, welcome to Flakes'
      })
    }
  )
}