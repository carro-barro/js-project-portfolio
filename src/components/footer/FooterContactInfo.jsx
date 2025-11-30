import styled from "styled-components"
import { P } from "../typography/P"


const StyledTextContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 8px;

@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: center;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 580px;
  }
`

export const FooterContactInfo = () => {
  return (
    <StyledTextContainer>
      <P>Carolina Oldertz</P>
      <P>+46(0)72 251 25 95</P>
      <P>carolina.oldertz@gmail.com</P>
    </StyledTextContainer>
  )
}