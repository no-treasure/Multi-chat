import { authToken } from "@multi-chat/frontend/stores"
import axios from "axios"

const HttpService = axios.create({
  baseURL: "/api",
  headers: {
    Authorization: `Basic ${authToken.get()}`
  }
})

export { HttpService }
