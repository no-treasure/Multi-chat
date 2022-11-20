import { FC } from "react"
import { Box } from "@chakra-ui/react"
import { useStore } from "@nanostores/react"

import { MessageType } from "@multi-chat/shared/types"
import { userMap } from "@multi-chat/frontend/stores"

export const Message: FC<MessageType.Base> = ({ contentData, user }) => {
  const currentUser = useStore(userMap)
  const formatMessage = (username: string, current: string, content: string): string =>
    username === current ? ` ${content}` : `${username}:  ${content}`

  return (
    <Box
      ml={user.username === currentUser.username ? "auto" : ""}
      mr={user.username === currentUser.username ? "" : "auto"}
      p={2}
      background="blue.600"
      borderRadius="0.75rem"
      w="max-content"
      mb="10px"
    >
      {formatMessage(user.username, currentUser.username, contentData.text)}
    </Box>
  )
}
