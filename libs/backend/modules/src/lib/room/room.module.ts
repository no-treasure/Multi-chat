import { FastifyPluginAsync } from "fastify"

import { RoomEvent } from "@multi-chat/shared/socket"
import RoomRepository from "./room.repository"

const roomModule: FastifyPluginAsync = async (server): Promise<void> => {
  const roomRepository = new RoomRepository(server)

  server.io.on("connection", async (socket) => {
    socket.emit(RoomEvent.LOAD_ROOMS, await roomRepository.allUserRooms(server.user))
  })
}

export { roomModule }
