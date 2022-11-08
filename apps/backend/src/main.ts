import Fastify from "fastify"

import { pinoLogger } from "@multi-chat/backend/constants"

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
    throw new Error(err)
  }
}

start()
