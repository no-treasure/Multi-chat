import React from "react"
import { Flex } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"

const Layout: React.FC = () => (
  <Flex w="100%" h="100%">
    <Outlet />
  </Flex>
)

export { Layout }
