import { FastifyPluginAsync } from "fastify"

const usersRoutes: FastifyPluginAsync = async (fastify, options): Promise<void> => {
  fastify.get("/users", async (request, reply) => {
    return { hello: "world" }
  })
}

export { usersRoutes }
