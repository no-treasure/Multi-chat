import { map } from "nanostores"

type RegisterMapState = {
  email: string
  password: string
  checkPass: string
  username: string
}

export const registerMap = map<RegisterMapState>({
  email: "",
  password: "",
  checkPass: "",
  username: ""
})
