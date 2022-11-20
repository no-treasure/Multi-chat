import { Box, Flex } from "@chakra-ui/react"
import styled from "@emotion/styled"
import { useStore } from "@nanostores/react"
import { FC, useRef } from "react"

import { useAutoScroll } from "@multi-chat/frontend/hooks"
import { allMessagesAtom } from "@multi-chat/frontend/stores"

import { ChatInput } from "./ChatInput"
import { Message } from "./Message"

type Props = {
  //
}

const ScrollContainer = styled(Box)`
  &::-webkit-scrollbar {
    display: none;
  }
`

const Chat: FC<Props> = () => {
  const messages = useStore(allMessagesAtom)
  const chatBoxRef = useRef<HTMLDivElement>(null)

  useAutoScroll(chatBoxRef, messages)

  return (
    <Flex width="700px" h="100%" flexDir="column" margin="0 auto" justifyContent="flex-end">
      <ScrollContainer overflow="scroll" ref={chatBoxRef} p="5px 15px">
        <Flex flexBasis="100%" flexDir="column" justify="flex-end">
          {messages.map((message) => (
            <Message key={message.id} {...message} />
          ))}
        </Flex>
      </ScrollContainer>
      <ChatInput />
    </Flex>
  )
}

export { Chat }
