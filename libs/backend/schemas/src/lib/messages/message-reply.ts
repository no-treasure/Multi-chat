import { Prisma } from "@prisma/client"

export type MessageReply = Prisma.MessageGetPayload<{ include: { user: true } }>
