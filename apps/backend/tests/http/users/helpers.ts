import { randSuperhero, randPassword, randEmail } from "@ngneat/falso"

import { CreateUserDto } from "@multi-chat/backend-schemas"

export const fakeUserDto = (): CreateUserDto => ({
  user: {
    username: randSuperhero().realName,
    password: randPassword(),
    email: randEmail()
  }
})
