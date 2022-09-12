import { FastifyPluginAsync } from "fastify"
import { MessageController } from "./message.controller"

const messageModule: FastifyPluginAsync = async (server): Promise<void> => {
  server.io.on("connection", (socket) => {
    new MessageController(server, socket)
  })
}

export { messageModule }
