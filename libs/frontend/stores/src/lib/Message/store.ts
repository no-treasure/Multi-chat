import { atom } from "nanostores"

import { SocketService } from "@multi-chat/frontend/api"
import { MessageType } from "@multi-chat/shared/types"

export const allMessagesAtom = atom<MessageType.Base[]>([])

SocketService.on("new_message", (payload) => {
  allMessagesAtom.set([...allMessagesAtom.get(), payload.message])
})
