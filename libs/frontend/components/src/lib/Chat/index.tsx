import { Input } from "@chakra-ui/react"
import { allMessagesAtom, messageActions, selectedRoomAtom } from "@multi-chat/frontend/stores"
import { MessageType } from "@multi-chat/shared/types"
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
  }

  return (
    <div>
      {messages.map((message: any) => (
        <div>{`${message.user.username}:  ${message.contentData.text}`}</div>
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
