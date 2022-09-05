import Fastify from "fastify"
import { pinoLogger } from "@multi-chat/backend/constants"

import { buildServer } from "../src/server"

type BuildTestAppOptions = {
  withLogger?: boolean
}

const buildTestApp = (options: BuildTestAppOptions) => {
  const { withLogger } = options

  const server = Fastify({ logger: withLogger ? pinoLogger : undefined })

  server.register(buildServer)

  return server
}

export default buildTestApp
