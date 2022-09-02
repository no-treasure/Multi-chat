import { FastifyPluginAsync } from "fastify"
import RoomRepository from "./room.repository"

const roomModule: FastifyPluginAsync = async (server): Promise<void> => {
  const roomRepository = new RoomRepository(server)

  server.io.on("connection", async (socket) => {
    socket.emit("allRooms", await roomRepository.allUserRooms(server.user))
  })
}

export { roomModule }
