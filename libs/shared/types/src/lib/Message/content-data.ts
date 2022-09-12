import { MessageContentType } from "@prisma/client"

export type TextContentData = {
  [MessageContentType.text]: string
}

export type ContentData = TextContentData
