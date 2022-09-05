import { pinoLogger } from "@multi-chat/backend/constants"
import Fastify from "fastify"

import { buildServer } from "./server"

const server = Fastify({
  logger: pinoLogger
})

server.register(buildServer)

const start = async () => {
  try {
    await server.listen({ port: 3000 })

    server.swagger()
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()
