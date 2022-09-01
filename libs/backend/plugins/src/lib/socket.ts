import fp from "fastify-plugin"
import { Server, ServerOptions } from "socket.io"

type Options = Partial<ServerOptions>

const socketIoPlugin = fp<Options>(async function (fastify, opts) {
  fastify.decorate("io", new Server(fastify.server, opts))

  fastify.addHook("onClose", (fastify, done) => {
    fastify.io.close()
    done()
  })
})

declare module "fastify" {
  interface FastifyInstance {
    io: Server
  }
}

export { socketIoPlugin }
