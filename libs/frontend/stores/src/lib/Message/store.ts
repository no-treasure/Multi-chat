import { SocketService } from "@multi-chat/frontend/api"
import { MessageType } from "@multi-chat/shared/types"

import { atom } from "nanostores"

export const allMessagesAtom = atom<MessageType.Base[]>([])

SocketService.on("new_message", (payload) => {
  allMessagesAtom.set([...allMessagesAtom.get(), payload.message])
})
