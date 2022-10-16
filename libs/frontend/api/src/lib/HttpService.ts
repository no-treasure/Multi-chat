import axios from "axios"

import { authToken } from "./authToken"

const HttpServiceBase = () => {
  const token = authToken.get()

  return axios.create({
    baseURL: "/api",
    headers: {
      Authorization: token ? `Bearer ${token}` : ""
    }
  })
}

export const HttpService = HttpServiceBase()
