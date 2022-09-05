import { fakeUserDto } from "./helpers"
import buildTestApp from "../../server"

describe("Test user auth", () => {
  const app = buildTestApp({})
  const userDto = fakeUserDto()
  let token = ""

  describe("POST /users", () => {
    it("should register", async () => {
      const { statusCode } = await app.inject({
        url: "/users",
        method: "POST",
        payload: userDto
      })

      expect(statusCode).toBe(201)
    })
  })

  describe("POST /users/login", () => {
    it("should login", async () => {
      const { statusCode, json } = await app.inject({
        url: "/users/login",
        method: "POST",
        payload: { user: { email: userDto.user.email, password: userDto.user.password } }
      })

      token = json<{ user: { token: string } }>().user.token

      expect(statusCode).toBe(200)
    })
  })

  describe("GET /user", () => {
    it("should get user", async () => {
      const res = await app.inject({
        url: "/user",
        method: "GET",
        headers: { authorization: token }
      })

      expect(res.statusCode).toBe(200)
    })
  })
})
