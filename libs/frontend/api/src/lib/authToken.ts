import { persistentAtom } from "@nanostores/persistent"

export const authToken = persistentAtom<string>("authToken", "", {
  encode: JSON.stringify,
  decode: JSON.parse
})
