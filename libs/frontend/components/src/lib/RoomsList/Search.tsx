import { Search2Icon } from "@chakra-ui/icons"
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import React from "react"

type Props = {
  //
}

const Search: React.FC<Props> = () => {
  return (
    <InputGroup ml="13px">
      <InputLeftElement children={<Search2Icon width={4} height={4} />} />
      <Input variant="telegram" placeholder="Search" />
    </InputGroup>
  )
}

export { Search }
