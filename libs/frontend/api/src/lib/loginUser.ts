import { Users } from "@multi-chat/shared/types"
import { AxiosResponse } from "axios"
import { HttpService } from "./base"

export const loginUser = (): Promise<AxiosResponse<Users.Response, any>> =>
  HttpService.get<Users.Response>("/users/login")
