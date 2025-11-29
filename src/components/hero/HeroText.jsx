import styled from "styled-components"
import { H3 } from "../typography/H3"
import { P } from "../typography/P"

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 782px;
  margin: 0 auto;
  color: black;
  gap: 16px;
`

export const HeroText = () => {
  return (
    <StyledTextContainer>
      <H3>Web Developer with a Background in Content creation and marketing</H3>
      <P>I'm a driven Web developer who turned my creative background into a new passion for coding. I thrive on solving complex challenges and bring fresh, design-minded thinking to every project. </P>
    </StyledTextContainer>
  )
}