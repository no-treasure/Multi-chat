import { RefObject, useEffect } from "react"

export const useAutoScroll = <T>(element: RefObject<HTMLDivElement>, messages: Array<T>) => {
  useEffect(() => {
    if (messages && messages.length) {
      element.current!.scrollTop = element.current!.scrollHeight
    }
  }, [messages])
}
