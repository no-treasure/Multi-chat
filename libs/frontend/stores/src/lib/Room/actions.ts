import { MessageType } from "@multi-chat/shared/types"
import { action } from "nanostores"
import { messageActions } from "../Message"
import { roomsAtom, selectedRoomAtom } from "./store"

export const selectRoom = action(selectedRoomAtom, "selectRoom", (store, selectedRoomId: number) => {
  store.set(selectedRoomId)
  messageActions.loadMessages(selectedRoomId)
})

export const updateRoomLastMessage = action(
  roomsAtom,
  "updateLastMessage",
  (store, { roomId, message }: { roomId: number; message: MessageType.Base }) => {
    const room = store.get().find(({ id }) => id === roomId)

    if (room) {
      room.messages = [message]
      store.set([...store.get(), room])
    }
  }
)
