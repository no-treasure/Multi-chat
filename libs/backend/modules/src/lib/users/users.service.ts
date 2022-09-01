import { FastifyInstance } from "fastify"
import { assoc, omit, pick, pipe } from "ramda"
import { genSalt, hash } from "bcryptjs"
import { CreateUserDto } from "@multi-chat/backend/schemas"
import { User } from "@prisma/client"
import UsersRepository from "./users.repository"

class UsersService {
  server: FastifyInstance
  usersRepository: UsersRepository

  constructor(server) {
    this.server = server
    this.usersRepository = new UsersRepository(server)
  }

  async findUser(email: string): Promise<User | null> {
    const user = await this.usersRepository.findUser(email)

    if (!user) return null

    return user
  }

  async createUser({ user }: CreateUserDto): Promise<User> {
    const salt = await genSalt(10)
    const passwordHash = await hash(user.password, salt)
    const formattedUser = pipe(omit(["password"]), assoc("passwordHash", passwordHash))(user)

    const newUser = await this.usersRepository.createUser(formattedUser)

    return newUser
  }

  buildUserResponse(user: User): Pick<User, "email" | "username" | "image"> & { token: string } {
    const userResponse = pipe(
      pick(["email", "username", "image"]),
      assoc("token", `Bearer ${this.server.jwt.sign(user)}`)
    )(user)

    return userResponse
  }

  // async updateUser({ id }: User, { user }: UpdateUserDto): Promise<User | null> {
  //   const updatedUser = await UserModel.findByIdAndUpdate(_id, user, { new: true }).exec()

  //   if (!updatedUser) return null

  //   return updatedUser.toObject()
  // }
}

export default UsersService
