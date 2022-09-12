import { MessageContentType } from "@prisma/client"

export type CreateMessageDto = {
  roomId: number
  contentType: typeof MessageContentType.text
  contendData: {
    [MessageContentType.text]: string
  }
}
