import { Flex, Text } from "@chakra-ui/react"
import React from "react"
import { Link } from "react-router-dom"

const NotFoundPage: React.FC = () => {
  return (
    <Flex pt={110} margin="0 auto" direction={"column"} alignItems="center">
      NOT FOUND &#9785;
      <Link to="register">
        <Text  mt = "10" mb="10" color="blue"> Register</Text>
      </Link>
      <Link to="login">
        <Text mb="10" color="blue"> Login</Text>
      </Link>
    </Flex>)
}

export { NotFoundPage }
