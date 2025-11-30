import styled from "styled-components"
import { H2 } from "../typography/H2"

const StyledHeadingContainer = styled.div`
margin: 128px 0;
`

export const ArticleHeading = () => {
  return (
    <StyledHeadingContainer>
      <H2>My Words</H2>
    </StyledHeadingContainer>
  )
}