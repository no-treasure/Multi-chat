import { Message, User } from "@prisma/client"
import { TextContentData } from "./content-data"

type TextMessage = Message & { contentData: TextContentData } & { user: User }

export type Base = TextMessage
