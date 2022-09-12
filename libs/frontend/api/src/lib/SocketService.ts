import { io, Socket } from "socket.io-client"
import { ServerToClientEvents, ClientToServerEvents, SOCKET_PATH } from "@multi-chat/shared/socket"
import { authToken } from "./authToken"

export const SocketServiceBase = (): Socket<ServerToClientEvents, ClientToServerEvents> => {
  return io({
    transports: ["websocket"],
    path: SOCKET_PATH,
    auth: {
      token: authToken.get()
    }
  })
}

export const SocketService = SocketServiceBase()
