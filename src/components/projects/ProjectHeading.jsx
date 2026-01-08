import styled from "styled-components"
import { Typography } from "../typography/Typography"

const StyledHeadingContainer = styled.div`
margin: 64px 0;

@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin : 128px 0;
  }
`

export const ProjectHeading = () => {
  return (
    <StyledHeadingContainer>
      <Typography variant="h2">Featured Projects</Typography>
    </StyledHeadingContainer>
  )
}