import { Box } from "@chakra-ui/react"
import { roomActions, roomsAtom, userMap } from "@multi-chat/frontend/stores"
import { RoomType } from "@multi-chat/shared/types"
import { useStore } from "@nanostores/react"
import React from "react"

type Props = {
  //
}

const RoomsList: React.FC<Props> = () => {
  const rooms = useStore(roomsAtom)
  const currentUser = useStore(userMap)

  console.log(currentUser)

  const findRecipient = (room: RoomType.Base) =>
    room.users.filter(({ email }) => email !== currentUser.email)[0]

  const onRoomClick = (id: number) => () => {
    roomActions.selectRoom(id)
  }

  return (
    <>
      {rooms.map((room) => {
        const recipient = findRecipient(room)

        return (
          <Box key={room.id} p="6" onClick={onRoomClick(room.id)}>
            {recipient.username}
          </Box>
        )
      })}
    </>
  )
}

export { RoomsList }
