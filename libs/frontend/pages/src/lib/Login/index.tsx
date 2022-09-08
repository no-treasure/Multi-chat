import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { Box } from "@chakra-ui/react"
import { useStore } from "@nanostores/react"
import { isLoggedInAtom } from "@multi-chat/frontend/stores"

type Props = {
  //
}

const LoginPage: React.FC<Props> = () => {
  const navigate = useNavigate()
  const isLoggedIn = useStore(isLoggedInAtom)

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login")
    }
  }, [])

  return <Box pt={110}>LOGIN</Box>
}

export { LoginPage }
