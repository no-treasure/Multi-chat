import {
  AddIcon,
  DownloadIcon,
  SettingsIcon,
  HamburgerIcon,
  MoonIcon,
  ExternalLinkIcon
} from "@chakra-ui/icons"
import {
  Menu as ChakraMenu,
  IconButton,
  MenuButton,
  MenuItem,
  MenuList,
  Switch,
  useColorMode
} from "@chakra-ui/react"
import React from "react"
import { useNavigate } from "react-router-dom"

import { userActions } from "@multi-chat/frontend/stores"

type Props = {
  //
}

const Menu: React.FC<Props> = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const onLogoutUser = () => {
    userActions.logout()
  }

  return (
    <ChakraMenu>
      <MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="telegram" />
      <MenuList>
        <MenuItem icon={<AddIcon />}>Contacts</MenuItem>
        <MenuItem icon={<SettingsIcon />}>Settings</MenuItem>
        <MenuItem icon={<MoonIcon />} closeOnSelect={false} onClick={toggleColorMode}>
          Night Mode <Switch colorScheme="telegram" isChecked={colorMode === "dark"} />
        </MenuItem>
        <MenuItem icon={<DownloadIcon />}>Install App</MenuItem>
        <MenuItem icon={<ExternalLinkIcon />} onClick={onLogoutUser}>
          Logout
        </MenuItem>
      </MenuList>
    </ChakraMenu>
  )
}

export { Menu }
