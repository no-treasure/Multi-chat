import { Avatar, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"
import { roomActions, roomsAtom, userMap } from "@multi-chat/frontend/stores"
import { RoomType } from "@multi-chat/shared/types"
import { useStore } from "@nanostores/react"
import { prop, sortBy } from "ramda"
import React from "react"
import { Menu } from "./Menu"
import { Search } from "./Search"

type Props = {
  //
}

const sortByCreatedDate = sortBy(prop("createdAt"))

const RoomsList: React.FC<Props> = () => {
  const rooms = useStore(roomsAtom)
  const currentUser = useStore(userMap)

  const findRecipient = (room: RoomType.Base) =>
    room.users.filter(({ email }) => email !== currentUser.email)[0]

  const onRoomClick = (id: number) => () => {
    roomActions.selectRoom(id)
  }

  return (
    <>
      <Flex p={"6px 13px 8px"}>
        <Menu />
        <Search />
      </Flex>

      <Tabs isFitted colorScheme="telegram">
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            {sortByCreatedDate(rooms).map((room) => {
              const recipient = findRecipient(room)
              const lastMessage = room.messages[0]!

              return (
                <Flex key={`room-${room.id}`} p="9px" onClick={onRoomClick(room.id)}>
                  <Avatar name={recipient.username} src={recipient.image!} mr="8px" />
                  <Flex direction="column">
                    <Text fontSize="md">{recipient.username}</Text>
                    <Text fontSize="md">
                      {lastMessage.userId === currentUser.id
                        ? `You: ${lastMessage.contentData.text}`
                        : lastMessage.contentData!.text}
                    </Text>
                  </Flex>
                </Flex>
              )
            })}
          </TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}

export { RoomsList }
