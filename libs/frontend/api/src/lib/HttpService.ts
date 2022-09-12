import axios from "axios"
import { authToken } from "./authToken"

const HttpService = axios.create({
  baseURL: "/api",
  headers: {
    // Authorization: `Bearer ${authToken.get()}`
  }
})

export { HttpService }
