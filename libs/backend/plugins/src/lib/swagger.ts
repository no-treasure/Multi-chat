import fp from "fastify-plugin"
import fastifySwagger, { SwaggerOptions } from "@fastify/swagger"

const swaggerPlugin = fp<SwaggerOptions>(async (fastify, opts) => {
  fastify.register(fastifySwagger, {
    routePrefix: "/docs",
    swagger: {
      info: {
        title: "Multi-chat app swagger",
        description: "Testing the Fastify swagger API",
        version: "0.1.0"
      },
      externalDocs: {
        url: "https://swagger.io",
        description: "Find more info here"
      },
      host: "localhost",
      schemes: ["http"]
    },
    staticCSP: true,
    exposeRoute: true
  })
})

export { swaggerPlugin }
