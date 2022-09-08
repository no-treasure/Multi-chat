import { persistentAtom } from "@nanostores/persistent"

export const isLoggedInAtom = persistentAtom<boolean>("isLoggedIn", false, {
  encode: JSON.stringify,
  decode: JSON.parse
})
