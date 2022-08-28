import { FastifyPluginAsync } from "fastify"

const routes: FastifyPluginAsync = async (fastify, options): Promise<void> => {
  fastify.get("/", async (request, reply) => {
    fastify.log.info("SOME")
    return { hello: "world" }
  })
}

export default routes
