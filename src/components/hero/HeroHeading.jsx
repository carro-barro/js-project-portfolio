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
const StyledHeading = styled(H1)`
   font-size: 52px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 100px;
  }
`
const StyledSmallHeading = styled(H3)`
   font-size: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 30px;
  }
`

export const HeroHeading = () => {
  return (
    <StyledHeadingContainer>
      <StyledSHeading>Hi there, I'm</StyledSHeading>
      <StyledHeading>Carolina Oldertz</StyledHeading>
    </StyledHeadingContainer>
  )
}