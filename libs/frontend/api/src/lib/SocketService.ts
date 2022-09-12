import { io, Socket } from "socket.io-client"
import { ServerToClientEvents, ClientToServerEvents, SOCKET_PATH } from "@multi-chat/shared/socket"
import { authToken } from "./authToken"

class SocketServiceBase {
  socket: Socket<ServerToClientEvents, ClientToServerEvents>
  constructor() {
    this.socket = this.createConnection()
  }

  static socket() {
    return this.socket
  }

  private createConnection() {
    return io({
      transports: ["websocket"],
      path: SOCKET_PATH,
      auth: {
        token: authToken.get()
        // token:
        //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiY3JlYXRlZEF0IjoiMjAyMi0wOS0wMlQyMTowNTozNy43NzhaIiwiZW1haWwiOiJhZG1pQGFkbWluLmNvbSIsInBhc3N3b3JkSGFzaCI6IiQyYSQxMCRSL1hrd0FId2daS09SVHdZaXlaRjZPd0NqNkt3OXU3dWdnWUdTSmYxSmhnSW5lNFp1Qm5BMiIsInVzZXJuYW1lIjoiQXJzZW5peSIsImltYWdlIjpudWxsLCJpYXQiOjE2NjIxNTI3Mzd9.hVPPyiZJJT80DgYB2UM7Q8uqfTliytTmftR6Blxpf0I"
      }
    })
  }
}

export const SocketService = new SocketServiceBase()
