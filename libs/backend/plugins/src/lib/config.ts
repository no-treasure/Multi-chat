import fp from "fastify-plugin"
import fastifyEnv, { fastifyEnvOpt } from "@fastify/env"
import { ConfigSchema } from "@multi-chat/backend/schemas"

declare module "fastify" {
  interface FastifyInstance {
    config: {
      DATABASE_URL: string
      JWT_SECRET: string
    }
  }
}

const configPlugin = fp<fastifyEnvOpt>(async (fastify, opts) => {
  fastify.register(fastifyEnv, { schema: ConfigSchema })
})

export { configPlugin }
