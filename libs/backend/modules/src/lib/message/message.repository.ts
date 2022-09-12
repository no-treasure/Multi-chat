import { CreateMessageDto, MessageReply } from "@multi-chat/backend-schemas"
import { FastifyInstance } from "fastify"

class MessageRepository {
  server: FastifyInstance
  constructor(server: FastifyInstance) {
    this.server = server
  }
  loadMessages(selectedRoomId: number, pagination = { take: 100, skip: 0 }): Promise<MessageReply[]> {
    return this.server.prisma.message.findMany({
      take: pagination.take,
      skip: pagination.skip,
      where: { room: { id: { equals: selectedRoomId } } },
      include: { user: true }
    })
  }

  createMessage(message: CreateMessageDto, userId: number) {
    return this.server.prisma.message.create({
      data: {
        userId,
        ...message
      },
      include: { user: true }
    })
  }
}

export default MessageRepository
