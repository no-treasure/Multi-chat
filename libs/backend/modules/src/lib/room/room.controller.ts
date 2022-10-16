import { FastifyInstance } from "fastify"

import { BackendSocket } from "@multi-chat/shared/socket"

import RoomRepository from "./room.repository"

class RoomController {
  server: FastifyInstance
  socket: BackendSocket
  roomRepository: RoomRepository
  constructor(server: FastifyInstance, socket: BackendSocket) {
    this.server = server
    this.socket = socket
    this.roomRepository = new RoomRepository(server)

    this.onLoadRooms()
  }
  async onLoadRooms() {
    this.socket.emit("load_rooms", {
      rooms: await this.roomRepository.allUserRooms(this.server.user)
    })
  }
}

export { RoomController }
