import { Input } from "@chakra-ui/react"
import { CreateMessageDto } from "@multi-chat/backend-schemas"
import { allMessagesAtom, messageActions, selectedRoomAtom } from "@multi-chat/frontend/stores"
import { useStore } from "@nanostores/react"
import { MessageContentType } from "@prisma/client"
import React, { useState } from "react"

type Props = {
  //
}

const Chat: React.FC<Props> = () => {
  const [inputValue, setInputValue] = useState("")
  const selectedRoomId = useStore(selectedRoomAtom)!
  const messages = useStore(allMessagesAtom)

  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.code === "Enter") {
      const message: CreateMessageDto = {
        roomId: selectedRoomId,
        contentType: MessageContentType.text,
        contendData: {
          text: inputValue
        }
      }

      messageActions.sendMessage(message)
      setInputValue("")
    }
  }

  return (
    <div>
      {messages.map((message: any) => (
        <div>{`${message.user.username}:  ${message.contendData.text}`}</div>
      ))}
      <Input
        placeholder="Enter..."
        size="md"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={onKeyDown}
      />
    </div>
  )
}

export { Chat }
