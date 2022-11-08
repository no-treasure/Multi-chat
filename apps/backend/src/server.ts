import { readFileSync } from "node:fs"
import { join } from "node:path"

import fp from "fastify-plugin"

import {
  prismaPlugin,
  configPlugin,
  jwtPlugin,
  sensiblePlugin,
  swaggerPlugin,
  socketIoPlugin
} from "@multi-chat/backend/plugins"
import { messageModule, roomModule, usersRoute } from "@multi-chat/backend/modules"

import { sourceRoot } from "../project.json"

const buildServer = fp(async (server) => {
  // # Plugins
  server.register(configPlugin)
  server.register(jwtPlugin)
  server.register(sensiblePlugin)
  server.register(prismaPlugin)
  server.register(swaggerPlugin)
  server.register(socketIoPlugin)

  // # Test socket TODO: remove later
  server.get("/", async (req, reply) => {
    const data = readFileSync(join(sourceRoot, "index.html"))

    reply.header("content-type", "text/html; charset=utf-8")
    reply.send(data)
  })
  server.register(messageModule)
  server.register(roomModule)

  // # Routes
  server.register(usersRoute, { prefix: "/api" })
})

export { buildServer }
