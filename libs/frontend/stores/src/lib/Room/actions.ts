import { action } from "nanostores"
import { messageActions } from "../Message"
import { selectedRoomAtom } from "./store"

export const selectRoom = action(selectedRoomAtom, "selectRoom", (store, selectedRoomId: number) => {
  store.set(selectedRoomId)
  messageActions.loadMessages(selectedRoomId)
})
