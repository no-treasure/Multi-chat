import styled from "@emotion/styled"

/* eslint-disable-next-line */
export interface FrontendComponentsProps {}

const StyledFrontendComponents = styled.div`
  color: pink;
`

export function FrontendComponents(props: FrontendComponentsProps) {
  return (
    <StyledFrontendComponents>
      <h1>Welcome to FrontendComponents!</h1>
    </StyledFrontendComponents>
  )
}

export default FrontendComponents
