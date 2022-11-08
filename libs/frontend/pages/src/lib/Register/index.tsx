import { FC } from "react"
import { Link } from "react-router-dom"
import { Logo } from "../Login/styled"
import { Flex, Text, Input, Button } from "@chakra-ui/react"
import { useStore } from "@nanostores/react"
import { PasswordInput } from "@multi-chat/frontend/components"
import { registerActions, registerMap } from "@multi-chat/frontend/stores"

const RegisterPage: FC = () => {
  const { email, username, password, checkPass } = useStore(registerMap)

  const showRegisterButton = email.length && password.length && username.length && password === checkPass

  const onRegisterUser = (): void => {
    registerActions.register({ user: { email, username, password } })
  }

  return (
    <Flex pt={110} margin="0 auto" direction="column" alignItems="center">
      <Logo />
      <Text fontSize="3xl" fontWeight="bold" mt="10" mb="4">
        Multi-chat
      </Text>
      <Text fontSize="md" mb="1">
        Please enter your information
      </Text>
      <Text fontSize="md" mb="5">
        Do you already have an account?
        <Link to="/login">
          <Text textAlign="center" mt="5px" color="blue">
            Login now!
          </Text>
        </Link>
      </Text>

      <Input
        onChange={(e) => {
          registerMap.setKey("email", e.target.value)
        }}
        value={email}
        type="email"
        placeholder="Your email"
        mb="6"
        pr="4.5rem"
        size="lg"
      />

      <Input
        onChange={(e) => {
          registerMap.setKey("username", e.target.value)
        }}
        value={username}
        type="text"
        placeholder="Enter your name"
        mb="6"
        pr="4.5rem"
        size="lg"
      />

      <PasswordInput value={password} onChange={(e) => registerMap.setKey("password", e.target.value)} />

      <PasswordInput value={checkPass} onChange={(e) => registerMap.setKey("checkPass", e.target.value)} />

      {showRegisterButton ? <Button onClick={(e) => onRegisterUser()}>Register</Button> : ""}
    </Flex>
  )
}

export { RegisterPage }
