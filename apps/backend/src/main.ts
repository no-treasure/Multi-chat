import Fastify from "fastify"

import {
  logger,
  prismaPlugin,
  configPlugin,
  jwtPlugin,
  sensiblePlugin,
  swaggerPlugin,
  socketIoPlugin
} from "@multi-chat/backend/plugins"
import { messageModule, roomModule, usersRoute } from "@multi-chat/backend/modules"
import { readFileSync } from "node:fs"
import { join } from "node:path"

import { sourceRoot } from "../project.json"
// import { Server } from "socket.io"

const server = Fastify({
  logger
})

// # Plugins
server.register(configPlugin)
server.register(jwtPlugin)
server.register(sensiblePlugin)
server.register(prismaPlugin)
server.register(swaggerPlugin)
server.register(socketIoPlugin)

server.get("/", async (req, reply) => {
  const data = readFileSync(join(sourceRoot, "index.html"))
  reply.header("content-type", "text/html; charset=utf-8")
  reply.send(data)
})

server.register(messageModule)
server.register(roomModule)

// # Routes
server.register(usersRoute)

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
