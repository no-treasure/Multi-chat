import { map } from "nanostores"

interface UserValue {
  email: string
  username: string
  image: string | null
  token: string
}

export const userMap = map<UserValue>({
  email: "",
  username: "",
  image: null,
  token: ""
})
