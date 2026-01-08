import styled from "styled-components"
import { Typography } from "../typography/Typography"

const StyledHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
   margin-top; 64px
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 128px;
  }
`



export const HeroHeading = () => {
  return (
    <StyledHeadingContainer>
      <Typography variant="h3">Hi there, I'm</Typography>
      <Typography variant="h1">Carolina Oldertz</Typography>
    </StyledHeadingContainer>
  )
}