import styled from "styled-components"

const StyledHeadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledSmallHeading = styled.p`
margin-bottom: 0;
font-size: 30px;
font-style: normal;
font-weight: 500;
line-height: normal;
`

const StyledHeading = styled.h1`
margin: 25px 0;
font-size: 100px;
font-style: normal;
font-weight: 700;
line-height: normal;
color: #000;
`

export const HeroHeading = () => {
  return (
    <StyledHeadingContainer>
      <StyledSmallHeading>Hi there, I'm</StyledSmallHeading>
      <StyledHeading>Carolina Oldertz</StyledHeading>
    </StyledHeadingContainer>
  )
}