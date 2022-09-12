import { MessageType, RoomType } from "@multi-chat/shared/types"

export type ServerToClientEvents = {
  load_rooms: (paylaod: { rooms: RoomType.Base[] }) => void
  new_message: (payload: { message: MessageType.Base }) => void
}

export type ClientToServerEvents = {
  load_messages: (selectedRoom: number, callback: (payload: { messages: MessageType.Base[] }) => void) => void
  send_message: (payload: { message: MessageType.Create }) => void
}
