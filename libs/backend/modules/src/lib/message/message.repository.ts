import { FastifyInstance } from "fastify"

class MessageRepository {
  server: FastifyInstance
  constructor(server: FastifyInstance) {
    this.server = server
  }
}

export default MessageRepository
