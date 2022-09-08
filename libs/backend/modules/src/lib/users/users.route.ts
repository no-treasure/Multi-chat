import { LoginRequest, LoginSchema, RegisterRequest, RegisterSchema } from "@multi-chat/backend/schemas"
import { FastifyPluginAsync } from "fastify"
import { compare } from "bcryptjs"
import { usersErrors } from "@multi-chat/backend/constants"

import UsersService from "./users.service"

const usersRoute: FastifyPluginAsync = async (server) => {
  const usersService = new UsersService(server)

  server.post<RegisterRequest>("/users", { schema: RegisterSchema }, async (request, reply) => {
    const { email } = request.body.user

    const existUser = await usersService.findUser(email)

    if (existUser) throw server.httpErrors.badRequest(usersErrors.ALREADY_REGISTERED_ERROR)

    const createdUser = await usersService.createUser(request.body)

    reply.status(201)
    return { user: usersService.buildUserResponse(createdUser) }
  })

  server.post<LoginRequest>("/users/login", { schema: LoginSchema }, async (request, reply) => {
    const { email, password } = request.body.user
    const existUser = await usersService.findUser(email)

    if (!existUser) throw server.httpErrors.unauthorized(usersErrors.USER_NOT_FOUND_ERROR)

    const isCorrectPass = await compare(password, existUser.passwordHash)

    if (!isCorrectPass) throw server.httpErrors.unauthorized(usersErrors.WRONG_PASS_ERROR)

    reply.status(200)
    return { user: usersService.buildUserResponse(existUser) }
  })

  // TEST
  server.get("/user", { onRequest: server.authenticate }, async (request, reply) => {
    return request.user
  })
}

export { usersRoute }
