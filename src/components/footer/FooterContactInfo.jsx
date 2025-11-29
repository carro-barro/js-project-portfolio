import styled from "styled-components"

const StyledText = styled.p`
color: #FFF;
font-size: 30px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin: 0;
`
const StyledTextContainer = styled.div`
display: flex;
width: 580px;
flex-direction: column;
align-items: center;
gap: 8px;
`

export const FooterContactInfo = () => {
  return (
    <StyledTextContainer>
      <StyledText>Carolina Oldertz</StyledText>
      <StyledText>+46(0)72 251 25 95</StyledText>
      <StyledText>carolina.oldertz@gmail.com</StyledText>
    </StyledTextContainer>
  )
}