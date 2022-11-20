import { FC, useState } from "react"
import { ArrowRightIcon, AttachmentIcon, PhoneIcon } from "@chakra-ui/icons"
import { Box, Flex, Input } from "@chakra-ui/react"
import { MessageContentType } from "@prisma/client"
import { useStore } from "@nanostores/react"

import { MessageType } from "@multi-chat/shared/types"
import { messageActions, selectedRoomAtom } from "@multi-chat/frontend/stores"

export const ChatInput: FC = () => {
  const [inputValue, setInputValue] = useState("")
  const selectedRoomId = useStore(selectedRoomAtom)!

  const sendMessage = () => {
    if (inputValue === "") return

    const message: MessageType.Create = {
      roomId: selectedRoomId,
      contentType: MessageContentType.text,
      contentData: {
        text: inputValue
      }
    }

    messageActions.sendMessage(message)
    setInputValue("")
  }

  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.code === "Enter") sendMessage()
  }

  return (
    <Flex p={2}>
      <Flex
        justify="center"
        alignItems="center"
        background="blue.800"
        w="100%"
        p={4}
        pl={0}
        borderRadius="0.75rem"
        pr={0}
      >
        <Box pl={4} pr={4}>
          <AttachmentIcon width={8} height={8} />
        </Box>
        <Input
          width="100%"
          placeholder="Enter..."
          size="l"
          variant="unstyled"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={onKeyDown}
        />
      </Flex>

      <Flex
        pl={4}
        pr={4}
        ml={2}
        borderRadius="50%"
        background="blue.800"
        justify="center"
        alignItems="center"
        onClick={inputValue ? sendMessage : undefined}
      >
        {inputValue ? <ArrowRightIcon width={8} height={8} /> : <PhoneIcon width={8} height={8} />}
      </Flex>
    </Flex>
  )
}
