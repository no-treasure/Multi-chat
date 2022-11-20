import { useStore } from "@nanostores/react"
import { FC } from "react"
import { Avatar, Flex, Text } from "@chakra-ui/react"

import { roomActions, userMap } from "@multi-chat/frontend/stores"
import { RoomType } from "@multi-chat/shared/types"

const Room: FC<RoomType.Base> = ({ messages, users, id }) => {
  const currentUser = useStore(userMap)

  const onRoomClick = (roomId: number) => () => {
    roomActions.selectRoom(roomId)
  }
  const recipient = users.filter(({ email }) => email !== currentUser.email)[0]

  const checkLastMessage = (): string => {
    const lastMessage = messages[0]!

    if (lastMessage) {
      return lastMessage.userId === currentUser.id
        ? `You: ${lastMessage.contentData.text}`
        : lastMessage.contentData!.text
    }

    return "No messages yet"
  }

  return (
    <Flex key={`room-${id}`} p="9px" onClick={onRoomClick(id)}>
      <Avatar name={recipient.username} src={recipient.image!} mr="8px" />
      <Flex direction="column">
        <Text fontSize="md">{recipient.username}</Text>
        <Text fontSize="md">{checkLastMessage()}</Text>
      </Flex>
    </Flex>
  )
}

export default Room
