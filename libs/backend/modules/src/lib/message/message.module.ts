import { FastifyPluginAsync } from "fastify"

const messageModule: FastifyPluginAsync = async (server): Promise<void> => {
  server.io.on("connection", (socket) => {
    socket.on("message", () => {
      console.log("ON MESSAGE")
    })
  })
}

export { messageModule }
