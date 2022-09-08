import React from "react"
import { Box, Button, Image, useColorMode } from "@chakra-ui/react"

const RootPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Box bg="blue.300" flexBasis="500" flexShrink="1">
        CHAT_LIST
      </Box>
      <Box bg="blue.700" flexBasis="100%" flexGrow="2">
        CHAT
        <Button onClick={toggleColorMode}>Toggle {colorMode === "light" ? "Dark" : "Light"}</Button>
      </Box>
    </>
  )
}
export { RootPage }
