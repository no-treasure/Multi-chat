import { Box } from "@chakra-ui/react"
import { Chat, RoomsList } from "@multi-chat/frontend/components"
import { selectedRoomAtom } from "@multi-chat/frontend/stores"
import { useStore } from "@nanostores/react"

const RootPage = () => {
  const selectedRoom = useStore(selectedRoomAtom)

  return (
    <>
      <Box bg="blue.300" flexBasis="500" flexShrink="1">
        <RoomsList />
      </Box>
      <Box bg="blue.700" flexBasis="100%" flexGrow="2">
        {selectedRoom && <Chat />}
      </Box>
    </>
  )
}
export { RootPage }
