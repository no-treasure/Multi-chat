import { User } from "@prisma/client"

export type Response = Pick<User, "email" | "username" | "image"> & { token: string }
