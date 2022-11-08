import { action, task } from "nanostores"

import { CreateUserDto, UserReplyType } from "@multi-chat/backend-schemas"
import { authToken, HttpService } from "@multi-chat/frontend/api"

import { userMap } from "../User/index"
import { isLoggedInAtom } from "../Auth"

export const register = action(userMap, "login", (store, params: CreateUserDto) => {
  task(async () =>
    HttpService.post<UserReplyType>("/users", params).then(({ data }) => {
      store.set(data.user)
      isLoggedInAtom.set(true)
      authToken.set(data.user.token)
    })
  )
})
