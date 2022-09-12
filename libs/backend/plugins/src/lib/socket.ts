import { ServerToClientEvents, ClientToServerEvents, SOCKET_PATH } from "@multi-chat/shared/socket"
import { User } from "@prisma/client"
import fp from "fastify-plugin"
import { Server, ServerOptions } from "socket.io"

type Options = Partial<ServerOptions>

const socketIoPlugin = fp<Options>(async function (server) {
  server.decorate(
    "io",
    new Server<ClientToServerEvents, ServerToClientEvents>(server.server, {
      transports: ["websocket"],
      path: SOCKET_PATH
    })
  )

  server.io.use((socket, next) => {
    const token = socket.handshake.auth.token

    const user = server.jwt.verify<User>(token)

    if (!user) {
      next(new Error("thou shall not pass"))
    }

    server.user = user

    next()
  })

  server.addHook("onClose", (server, done) => {
    server.io.close()
    done()
  })
})

declare module "fastify" {
  interface FastifyInstance {
    io: Server<ClientToServerEvents, ServerToClientEvents>
    user: User
  }
}

export { socketIoPlugin }
