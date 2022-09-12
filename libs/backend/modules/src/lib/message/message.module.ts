import { FastifyPluginAsync } from "fastify"
import { MessageEvent } from "@multi-chat/shared/socket"
import MessageRepository from "./message.repository"

const messageModule: FastifyPluginAsync = async (server): Promise<void> => {
  const messageRepository = new MessageRepository(server)

  server.io.on("connection", (socket) => {
    socket.on(MessageEvent.LOAD_MESSAGES, async (selectedRoomId, callback) => {
      const messages = await messageRepository.loadMessages(selectedRoomId)

      socket.join(selectedRoomId.toString())

      callback(messages)
    })

    socket.on(MessageEvent.SEND_MESSAGE, async (message) => {
      const newMessage = await messageRepository.createMessage(message, server.user.id)

      server.io.in(message.roomId.toString()).emit(MessageEvent.NEW_MESSAGE, newMessage)
    })
  })
}

export { messageModule }
