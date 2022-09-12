import { FastifyPluginAsync } from "fastify"

import RoomRepository from "./room.repository"

const roomModule: FastifyPluginAsync = async (server): Promise<void> => {
  const roomRepository = new RoomRepository(server)

  server.io.on("connection", async (socket) => {
    socket.emit("load_rooms", { rooms: await roomRepository.allUserRooms(server.user) })
  })
}

export { roomModule }
