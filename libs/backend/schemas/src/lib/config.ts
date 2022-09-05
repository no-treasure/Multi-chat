import { Type } from "@sinclair/typebox"

const ConfigSchema = Type.Object({
  DATABASE_URL: Type.String(),
  JWT_SECRET: Type.String(),
  NODE_ENV: Type.Union([Type.Literal("TEST"), Type.Literal("DEV"), Type.Literal("PROD")])
})

export { ConfigSchema }
