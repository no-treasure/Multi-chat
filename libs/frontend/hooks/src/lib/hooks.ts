import { RefObject, useEffect } from "react"

import { MessageType } from "@multi-chat/shared/types"

export const useAutoScroll = (element: RefObject<HTMLDivElement>, messages: MessageType.Base[]) => {
  useEffect(() => {
    if (messages && messages.length) {
      element.current!.scrollTop = element.current!.scrollHeight
    }
  }, [messages])
}
