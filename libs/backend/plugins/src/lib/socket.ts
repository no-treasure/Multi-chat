import { User } from "@prisma/client"
import fp from "fastify-plugin"
import { Server, ServerOptions } from "socket.io"

type Options = Partial<ServerOptions>

const socketIoPlugin = fp<Options>(async function (server) {
  server.decorate("io", new Server(server.server, { transports: ["websocket"] }))

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
    io: Server
    user: User
  }
}

export { socketIoPlugin }
