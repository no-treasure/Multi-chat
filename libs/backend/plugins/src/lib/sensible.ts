import fp from "fastify-plugin"
import { User } from "@prisma/client"
import fastifyJwt, { FastifyJWTOptions } from "@fastify/jwt"

const jwtPlugin = fp<FastifyJWTOptions>(async (fastify, opts) => {
  fastify.register(fastifyJwt, {
    secret: process.env.JWT_SECRET!
  })
})

declare module "@fastify/jwt" {
  interface FastifyJWT {
    payload: User
  }
}

declare module "fastify" {
  export interface FastifyInstance {
    authenticate(request: FastifyRequest, reply: FastifyReply): void
  }
}

export { jwtPlugin }
