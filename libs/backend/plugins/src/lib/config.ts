import fp from "fastify-plugin"
import fastifyEnv, { fastifyEnvOpt } from "@fastify/env"
import { ConfigSchema } from "@multi-chat/backend-schemas"
import { Static } from "@sinclair/typebox"

declare module "fastify" {
  interface FastifyInstance {
    config: Static<typeof ConfigSchema>
  }
}

const configPlugin = fp<fastifyEnvOpt>(async (server, opts) => {
  server.register(fastifyEnv, { schema: ConfigSchema })
})

export { configPlugin }
