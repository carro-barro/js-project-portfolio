import styled from "styled-components"
import { Typography } from "../typography/Typography"


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
      <Typography variant="p">Carolina Oldertz</Typography>
      <Typography variant="p">+46(0)72 251 25 95</Typography>
      <Typography variant="p">carolina.oldertz@gmail.com</Typography>
    </StyledTextContainer>
  )
}