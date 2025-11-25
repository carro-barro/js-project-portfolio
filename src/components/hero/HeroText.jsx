import styled from "styled-components"

const StyledTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Styledheadingtext = styled.h2`
margin-bottom: 0;
font-size: 30px;
font-style: normal;
font-weight: 500;
line-height: normal;
`

const StyledText = styled.p`
margin: 25px 0;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

export const HeroText = () => {
  return (
    <StyledTextContainer>
      <Styledheadingtext>Web Developer with a Background in Content creation and marketing</Styledheadingtext>
      <StyledText>I'm a driven Web developer who turned my creative background into a new passion for coding. I thrive on solving complex challenges and bring fresh, design-minded thinking to every project. </StyledText>
    </StyledTextContainer>
  )
}