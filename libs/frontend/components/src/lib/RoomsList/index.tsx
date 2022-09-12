import { Box } from "@chakra-ui/react"
import { RoomsReply } from "@multi-chat/backend-schemas"
import { roomActions, roomsAtom, userMap } from "@multi-chat/frontend/stores"
import { useStore } from "@nanostores/react"
import React from "react"

type Props = {
  //
}

const RoomsList: React.FC<Props> = () => {
  const rooms = useStore(roomsAtom)
  const currentUser = useStore(userMap)

  console.log(currentUser)

  const findRecipient = (room: RoomsReply) => room.users.filter(({ email }) => email !== currentUser.email)[0]

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
