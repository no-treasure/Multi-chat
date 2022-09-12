import { Prisma } from "@prisma/client"

export type Base = Prisma.RoomGetPayload<{ include: { users: true; messages: true } }>
