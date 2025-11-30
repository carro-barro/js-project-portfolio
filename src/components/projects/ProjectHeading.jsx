import styled from "styled-components"
import { H2 } from "../typography/H2"

const StyledHeadingContainer = styled.div`
margin: 64px 0;

@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin : 128px 0;
  }
`

export const ProjectHeading = () => {
  return (
    <StyledHeadingContainer>
      <H2>Featured Projects</H2>
    </StyledHeadingContainer>
  )
}