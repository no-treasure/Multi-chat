import fp from "fastify-plugin"
import fastifyEnv, { fastifyEnvOpt } from "@fastify/env"
import { Static } from "@sinclair/typebox"

import { ConfigSchema } from "@multi-chat/backend-schemas"

declare module "fastify" {
  interface FastifyInstance {
    config: Static<typeof ConfigSchema>
  }
}

const configPlugin = fp<fastifyEnvOpt>(async (server, opts) => {
  server.register(fastifyEnv, { schema: ConfigSchema })
})

export { configPlugin }
