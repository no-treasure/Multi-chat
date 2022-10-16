import { Room, User } from "@prisma/client"

import { MessageType } from ".."

export type Base = Room & {
  users: Array<User>
  messages: Array<MessageType.Base>
}
