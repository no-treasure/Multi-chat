import { persistentMap } from "@nanostores/persistent"

type UserValue = {
  email: string
  username: string
  image?: string
  token: string
}

// TODO: Make not persistent
export const userMap = persistentMap<UserValue>(
  "user",
  {
    email: "",
    username: "",
    token: ""
  },
  {
    encode: JSON.stringify,
    decode: JSON.parse
  }
)
