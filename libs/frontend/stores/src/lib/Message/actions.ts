import { action } from "nanostores"

import { MessageType } from "@multi-chat/shared/types"
import { SocketService } from "@multi-chat/frontend/api"

import { allMessagesAtom } from "./store"
import { updateRoomLastMessage } from "../Room/actions"

export const loadMessages = action(allMessagesAtom, "all_messages", (store, selectedRoom: number) => {
  SocketService.emit("load_messages", selectedRoom, (payload) => {
    store.set(payload.messages)
  })
})

export const sendMessage = action(allMessagesAtom, "send_message", (store, message: MessageType.Create) => {
  SocketService.emit("send_message", { message })

  const lastMessage = {
    ...store.get()[store.get().length - 1],
    contentData: { text: message.contentData.text }
  }

  updateRoomLastMessage({
    roomId: message.roomId,
    message: lastMessage
  })
})
