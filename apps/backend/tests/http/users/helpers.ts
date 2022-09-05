import { CreateUserDto } from "@multi-chat/backend/schemas"
import { randSuperhero, randPassword, randEmail } from "@ngneat/falso"

export const fakeUserDto = (): CreateUserDto => ({
  user: {
    username: randSuperhero().realName,
    password: randPassword(),
    email: randEmail()
  }
})
