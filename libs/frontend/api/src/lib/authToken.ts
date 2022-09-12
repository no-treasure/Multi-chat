import { persistentAtom } from "@nanostores/persistent"
import { computed } from "nanostores"

export const authToken = persistentAtom<string>("authToken", "", {
  encode: JSON.stringify,
  decode: JSON.parse
})
// Returns header for Authorization

export const authorization = computed(authToken, (token) => {
  return { Authorization: `Bearer ${token}` }
})
