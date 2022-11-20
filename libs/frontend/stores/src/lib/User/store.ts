import { persistentMap } from "@nanostores/persistent"

type UserValue = {
  id: number
  email: string
  username: string
  image?: string
  token: string
}

export const initialUserMap: UserValue = {
  id: 0,
  email: "",
  username: "",
  token: ""
}
// TODO: Make not persistent
export const userMap = persistentMap<UserValue>("user", initialUserMap, {
  encode: JSON.stringify,
  decode: JSON.parse
})
