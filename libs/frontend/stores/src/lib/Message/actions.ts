import { MessageType } from "@multi-chat/shared/types"
import { action } from "nanostores"
import { allMessagesAtom } from "./store"
import { SocketService } from "@multi-chat/frontend/api"

export const loadMessages = action(allMessagesAtom, "all_messages", (store, selectedRoom: number) => {
  SocketService.emit("load_messages", selectedRoom, (payload) => {
    store.set(payload.messages)
  })
})

export const sendMessage = action(allMessagesAtom, "send_message", (_, message: MessageType.Create) => {
  SocketService.emit("send_message", { message })
})
