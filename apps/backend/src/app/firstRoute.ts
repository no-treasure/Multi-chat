import { FastifyPluginAsync } from "fastify"

const routes: FastifyPluginAsync = async (fastify, options): Promise<void> => {
  fastify.get("/", async (request, reply) => {
    return { hello: "world" }
  })
}

export default routes
