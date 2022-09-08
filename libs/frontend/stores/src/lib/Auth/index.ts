import { persistentAtom } from "@nanostores/persistent"

export const isLoggedInAtom = persistentAtom<boolean>("isLoggedIn", false, {
  encode: JSON.stringify,
  decode: JSON.parse
})

export const authToken = persistentAtom<string>("authToken", "", {
  encode: JSON.stringify,
  decode: JSON.parse
})
