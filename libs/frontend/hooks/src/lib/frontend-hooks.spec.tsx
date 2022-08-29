import { render } from "@testing-library/react"

import FrontendHooks from "./frontend-hooks"

describe("FrontendHooks", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<FrontendHooks />)
    expect(baseElement).toBeTruthy()
  })
})
