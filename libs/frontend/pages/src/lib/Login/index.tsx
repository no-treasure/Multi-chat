import { Flex, Text, Input, Button, FormControl } from "@chakra-ui/react"
import { PasswordInput } from "@multi-chat/frontend/components"
import { isLoggedInAtom } from "@multi-chat/frontend/stores"
import { useState } from "react"
import { Logo } from "./styled"

type Props = {
  //
}

const LoginPage: React.FC<Props> = () => {
  const [email, changeEmail] = useState("")
  const [password, changePassword] = useState("")

  const showNextButton = Boolean(email.length && password.length)

  const onLoginUser = () => {
    // isLoggedInAtom.set(true)
  }

  return (
    <Flex pt={110} margin="0 auto" direction="column" alignItems="center">
      <Logo />
      <Text fontSize="3xl" fontWeight="bold" mt="10" mb="4">
        Multi-chat
      </Text>
      <Text fontSize="md" mb="12">
        Please enter your email and password.
      </Text>

      <Input
        value={email}
        onChange={(e) => changeEmail(e.target.value)}
        type="email"
        placeholder="Email"
        mb="6"
        pr="4.5rem"
        size="lg"
      />

      <PasswordInput value={password} onChange={(e) => changePassword(e.target.value)} />

      {showNextButton && (
        <Button mt="30" w="100%" onClick={onLoginUser}>
          Next
        </Button>
      )}
    </Flex>
  )
}

export { LoginPage }
