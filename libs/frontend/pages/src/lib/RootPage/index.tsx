import React from "react"
import { Box } from "@chakra-ui/react"

const RootPage = () => (
  <>
    <Box bg="blue.300" flexBasis="500" flexShrink="1">
      CHAT_LIST
    </Box>
    <Box bg="blue.700" flexBasis="100%" flexGrow="2">
      CHAT
    </Box>
  </>
)

export { RootPage }
