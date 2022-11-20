import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { useStore } from "@nanostores/react"
import { prop, sortBy } from "ramda"
import React from "react"

import { roomsAtom } from "@multi-chat/frontend/stores"

import { Menu } from "./Menu"
import { Search } from "./Search"
import Room from "./Room"

type Props = {
  //
}

const sortByCreatedDate = sortBy(prop("createdAt"))

const RoomList: React.FC<Props> = () => {
  const rooms = useStore(roomsAtom)

  return (
    <>
      <Flex p="6px 13px 8px">
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
            {sortByCreatedDate(rooms).map((room) => (
              <Room key={room.id} {...room} />
            ))}
          </TabPanel>
          <TabPanel />
          <TabPanel />
        </TabPanels>
      </Tabs>
    </>
  )
}

export { RoomList }
