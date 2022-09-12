import { LoginUserDto, UserReplyType } from "@multi-chat/backend-schemas"
import { authToken, HttpService } from "@multi-chat/frontend/api"
import { action, task } from "nanostores"
import { userMap } from "./index"
import { isLoggedInAtom } from "../Auth"

export const login = action(userMap, "login", (store, params: LoginUserDto) => {
  task(
    async () =>
      await HttpService.post<UserReplyType>("/users/login", params).then(({ data }) => {
        store.set(data.user)
        isLoggedInAtom.set(true)
        authToken.set(data.user.token)
      })
  )
})
