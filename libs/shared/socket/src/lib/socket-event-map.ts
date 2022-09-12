import { RoomsReply } from "@multi-chat/backend-schemas"
import { Message } from "@prisma/client"

import { MessageEvent } from "./message-event"
import { RoomEvent } from "./room-event"

export type ServerToClientEvents = {
  [RoomEvent.LOAD_ROOMS]: (rooms: RoomsReply[]) => void
  [MessageEvent.NEW_MESSAGE]: (message: Message) => void
}

export type ClientToServerEvents = {
  [RoomEvent.SELECT_ROOM]: { id: number }
  [MessageEvent.LOAD_MESSAGES]: (selectedRoom: number, callback: (messages: Message[]) => void) => void
  [MessageEvent.SEND_MESSAGE]: any
}
