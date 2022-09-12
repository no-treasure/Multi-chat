import { SocketService } from "@multi-chat/frontend/api"
import { RoomType } from "@multi-chat/shared/types"
import { atom } from "nanostores"

export const roomsAtom = atom<RoomType.Base[]>([])

export const selectedRoomAtom = atom<number | null>(null)

SocketService.on("load_rooms", (payload) => roomsAtom.set(payload.rooms))
