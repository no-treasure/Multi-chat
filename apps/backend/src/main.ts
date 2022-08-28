import Fastify from "fastify"
import routes from "./app/firstRoute"

const fastify = Fastify({
  logger: {
    transport: {
      target: "pino-pretty",
      options: {
        translateTime: "HH:MM:ss Z",
        ignore: "pid,hostname"
      }
    }
  }
})

fastify.register(routes)

const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    console.log("Error", err)
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
