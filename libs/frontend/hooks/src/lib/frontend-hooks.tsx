import styled from "@emotion/styled"

/* eslint-disable-next-line */
export interface FrontendHooksProps {}

const StyledFrontendHooks = styled.div`
  color: pink;
`

export function FrontendHooks(props: FrontendHooksProps) {
  return (
    <StyledFrontendHooks>
      <h1>Welcome to FrontendHooks!</h1>
    </StyledFrontendHooks>
  )
}

export default FrontendHooks
