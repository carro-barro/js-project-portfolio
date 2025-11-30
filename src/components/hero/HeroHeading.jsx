import styled from "styled-components"
import { H1 } from "../typography/H1"
import { H3 } from "../typography/H3"

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
      <H3>Hi there, I'm</H3>
      <H1>Carolina Oldertz</H1>
    </StyledHeadingContainer>
  )
}