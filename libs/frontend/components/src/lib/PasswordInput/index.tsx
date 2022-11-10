import React, { useState } from "react"
import { InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react"

type Props = {
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const PasswordInput: React.FC<Props> = ({ value, onChange }) => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup size="lg" mb="6">
      <Input
        value={value}
        onChange={onChange}
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder="Enter password"
        size="lg"
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export { PasswordInput }
