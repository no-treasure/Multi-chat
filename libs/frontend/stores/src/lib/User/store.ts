import { persistentMap } from "@nanostores/persistent"

type UserValue = {
  id: number
  email: string
  username: string
  image?: string
  token: string
}

// TODO: Make not persistent
export const userMap = persistentMap<UserValue>(
  "user",
  {
    id: 0,
    email: "",
    username: "",
    token: ""
  },
  {
    encode: JSON.stringify,
    decode: JSON.parse
  }
)
