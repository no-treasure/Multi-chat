import { useStore } from "@nanostores/react"
import { FC, useEffect, useRef } from "react"
import { Avatar, Flex, Text } from "@chakra-ui/react"
import { User } from "@prisma/client"

import { roomActions, userMap } from "@multi-chat/frontend/stores"
import { RoomType } from "@multi-chat/shared/types"

const Room: FC<RoomType.Base> = (props) => {
  const { messages, users, id } = props
  const currentUser = useStore(userMap)

  const onRoomClick = (roomId: number) => () => {
    roomActions.selectRoom(roomId)
  }
  const findRecipient = (users: User[]) => users.filter(({ email }) => email !== currentUser.email)[0]

  const recipient = findRecipient(users)

  const lastMessageRef = useRef<HTMLParagraphElement>(null)

  const checkLastMessage = (): string => {
    const lastMessage = messages[0]!

    if (lastMessage) {
      return lastMessage.userId === currentUser.id
        ? `You: ${lastMessage.contentData.text}`
        : lastMessage.contentData!.text
    }

    return "No messages yet"
  }

  useEffect(() => {
    lastMessageRef.current!.innerHTML = checkLastMessage()
  })

  return (
    <Flex key={`room-${id}`} p="9px" onClick={onRoomClick(id)}>
      <Avatar name={recipient.username} src={recipient.image!} mr="8px" />
      <Flex direction="column">
        <Text fontSize="md">{recipient.username}</Text>
        <Text ref={lastMessageRef} fontSize="md">
          {checkLastMessage()}
        </Text>
      </Flex>
    </Flex>
  )
}

export default Room
