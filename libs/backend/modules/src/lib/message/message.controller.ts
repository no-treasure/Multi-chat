import { FastifyInstance } from "fastify"
import { BackendSocket } from "@multi-chat/shared/socket"

import MessageRepository from "./message.repository"

class MessageController {
  server: FastifyInstance
  socket: BackendSocket
  messageRepository: MessageRepository
  constructor(server: FastifyInstance, socket: BackendSocket) {
    this.server = server
    this.socket = socket
    this.messageRepository = new MessageRepository(server)

    this.onLoadMessages()
    this.onSendMessage()
  }

  onLoadMessages() {
    this.socket.on("load_messages", async (selectedRoomId, callback) => {
      const messages = await this.messageRepository.loadMessages(selectedRoomId)

      this.socket.join(selectedRoomId.toString())

      callback({ messages })
    })
  }

  onSendMessage() {
    this.socket.on("send_message", async ({ message }) => {
      const newMessage = await this.messageRepository.createMessage(message, this.server.user.id)

      this.server.io.in(message.roomId.toString()).emit("new_message", { message: newMessage })
    })
  }
}

export { MessageController }
