import { RoomsReply } from "@multi-chat/backend-schemas"
import { SocketService } from "@multi-chat/frontend/api"
import { RoomEvent } from "@multi-chat/shared/socket"
import { atom } from "nanostores"

export const roomsAtom = atom<RoomsReply[]>([])

export const selectedRoomAtom = atom<number | null>(null)

SocketService.socket.on(RoomEvent.LOAD_ROOMS, (rooms) => roomsAtom.set(rooms))
