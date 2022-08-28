import Fastify from "fastify"
import sensiblePlugin, { SensibleOptions } from "@fastify/sensible"

import { logger, prismaPlugin, configPlugin } from "@multi-chat/backend/plugins"
import { usersRoutes } from "@multi-chat/backend/routes"

const fastify = Fastify({
  logger
})

// # Routes
fastify.register(usersRoutes)

// # Plugins
fastify.register(configPlugin)
fastify.register(prismaPlugin)
fastify.register<SensibleOptions>(sensiblePlugin)

const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
