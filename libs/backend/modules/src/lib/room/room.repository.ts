import { Room, User } from "@prisma/client"
import { FastifyInstance } from "fastify"

class RoomRepository {
  server: FastifyInstance
  constructor(server: FastifyInstance) {
    this.server = server
  }

  allUserRooms(user: User, pagination = { take: 10, skip: 0 }): Promise<Room[]> {
    return this.server.prisma.room.findMany({
      take: pagination.take,
      skip: pagination.skip,
      where: { users: { some: { id: { equals: user.id } } } },
      include: { users: true, messages: { take: 1 } }
    })
  }
}

export default RoomRepository