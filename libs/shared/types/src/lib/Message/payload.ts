import { MessageContentType } from "@prisma/client"

export type Create = {
  roomId: number
  contentType: typeof MessageContentType.text
  contentData: {
    [MessageContentType.text]: string
  }
}
