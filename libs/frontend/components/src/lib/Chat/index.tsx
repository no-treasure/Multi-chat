import { ArrowRightIcon, AttachmentIcon, PhoneIcon } from "@chakra-ui/icons"
import { Box, Flex, Input } from "@chakra-ui/react"
import styled from "@emotion/styled"
import { useStore } from "@nanostores/react"
import { MessageContentType } from "@prisma/client"
import React, { useRef, useState } from "react"

import { MessageType } from "@multi-chat/shared/types"
import { allMessagesAtom, messageActions, selectedRoomAtom, userMap } from "@multi-chat/frontend/stores"
import { useAutoScroll } from "@multi-chat/frontend/hooks"

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
  const chatBoxRef = useRef<HTMLDivElement>(null)
  const { username } = useStore(userMap)

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

  const getFormatMessage = (username: string, current: string, content: string): string =>
    username === current ? ` ${content}` : `${username}:  ${content}`

  useAutoScroll(chatBoxRef, messages)

  return (
    <Flex width="700px" h="100%" flexDir="column" margin="0 auto" justifyContent="flex-end">
      <ScrollContainer overflow="scroll" ref={chatBoxRef} p="5px 15px">
        <Flex flexBasis="100%" flexDir="column" justify="flex-end">
          {messages.map((message) => (
            <Box
              ml={message.user.username === username ? "auto" : ""}
              mr={message.user.username === username ? "" : "auto"}
              p={2}
              key={message.id}
              background="blue.600"
              borderRadius="0.75rem"
              w="max-content"
              mb="10px"
            >
              {getFormatMessage(message.user.username, username, message.contentData.text)}
            </Box>
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
    </Flex>
  )
}

export { Chat }
