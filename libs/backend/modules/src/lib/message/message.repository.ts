import { FastifyInstance } from "fastify"
import { MessageType } from "@multi-chat/shared/types"
import { CreateMessageDto } from "@multi-chat/backend-schemas"

class MessageRepository {
  server: FastifyInstance
  constructor(server: FastifyInstance) {
    this.server = server
  }
  loadMessages(selectedRoomId: number, pagination = { take: 100, skip: 0 }): Promise<MessageType.Base[]> {
    return this.server.prisma.message.findMany({
      take: pagination.take,
      skip: pagination.skip,
      where: { room: { id: { equals: selectedRoomId } } },
      include: { user: true }
    }) as unknown as Promise<MessageType.Base[]>
  }

  createMessage(message: CreateMessageDto, userId: number): Promise<MessageType.Base> {
    return this.server.prisma.message.create({
      data: {
        userId,
        ...message
      },
      include: { user: true }
    }) as unknown as Promise<MessageType.Base>
  }
}

export default MessageRepository
