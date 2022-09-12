import { Prisma } from "@prisma/client"

export type RoomsReply = Prisma.RoomGetPayload<{ include: { users: true; messages: true } }>
