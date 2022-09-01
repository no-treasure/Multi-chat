import fp from "fastify-plugin"
import fastifySensible, { SensibleOptions } from "@fastify/sensible"

const sensiblePlugin = fp<SensibleOptions>(async (fastify, opts) => {
  fastify.register<SensibleOptions>(fastifySensible, opts)
})

export { sensiblePlugin }
