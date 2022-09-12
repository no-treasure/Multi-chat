import { action } from "nanostores"
import { MessageEvent } from "@multi-chat/shared/socket"
import { allMessagesAtom } from "./store"
import { SocketService } from "@multi-chat/frontend/api"
import { CreateMessageDto } from "@multi-chat/backend-schemas"

export const loadMessages = action(allMessagesAtom, "all_messages", (store, selectedRoom: number) => {
  SocketService.socket.emit(MessageEvent.LOAD_MESSAGES, selectedRoom, (messages) => {
    store.set(messages)
  })
})

export const sendMessage = action(allMessagesAtom, "send_message", (_, newMessage: CreateMessageDto) => {
  SocketService.socket.emit(MessageEvent.SEND_MESSAGE, newMessage)
})
