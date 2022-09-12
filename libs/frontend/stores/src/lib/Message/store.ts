import { SocketService } from "@multi-chat/frontend/api"
import { MessageEvent } from "@multi-chat/shared/socket"

import { Message } from "@prisma/client"
import { atom } from "nanostores"

export const allMessagesAtom = atom<Message[]>([])

SocketService.socket.on(MessageEvent.NEW_MESSAGE, (newMessage) => {
  allMessagesAtom.set([...allMessagesAtom.get(), newMessage])
})
