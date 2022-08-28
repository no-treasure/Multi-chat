import Fastify from "fastify"
import { logger, prismaPlugin } from "@multi-chat/backend/plugins"

import routes from "./app/firstRoute"

const fastify = Fastify({
  logger
})

fastify.register(routes)

fastify.register(prismaPlugin)

const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    console.log("Error", err)
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
