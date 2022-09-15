import { ArrowRightIcon, AttachmentIcon, PhoneIcon } from "@chakra-ui/icons"
import { Box, Flex, Input } from "@chakra-ui/react"
import styled from "@emotion/styled"
import { allMessagesAtom, messageActions, selectedRoomAtom } from "@multi-chat/frontend/stores"
import { MessageType } from "@multi-chat/shared/types"
import { useStore } from "@nanostores/react"
import { MessageContentType } from "@prisma/client"
import React, { useState } from "react"

type Props = {
  //
}

const ScrollContainer = styled(Box)`
  &::-webkit-scrollbar {
    display: none;
  }
`

const Chat: React.FC<Props> = () => {
  const [inputValue, setInputValue] = useState("")
  const selectedRoomId = useStore(selectedRoomAtom)!
  const messages = useStore(allMessagesAtom)

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
    <Flex width="700px" h="100%" flexDir="column" margin="0 auto">
      <ScrollContainer overflow="scroll">
        <Flex flexBasis="100%" flexDir="column" justify="flex-end">
          {messages.map((message) => (
            <Box
              p={2}
              key={message.id}
              background="blue.600"
              borderRadius="0.75rem"
              w="max-content"
              mb="10px"
            >{`${message.user.username}:  ${message.contentData.text}`}</Box>
          ))}
        </Flex>
      </ScrollContainer>

      <Flex p={2}>
        <Flex
          justify="center"
          alignItems="center"
          background="blue.800"
          w="100%"
          p={4}
          pl={0}
          borderRadius="0.75rem"
        >
          <Box pl={4} pr={4}>
            <AttachmentIcon width={8} height={8} />
          </Box>
          <Input
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
    </Flex>
  )
}

export { Chat }
