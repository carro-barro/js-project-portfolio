import styled from "styled-components"
import { Typography } from "../typography/Typography"

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 16px auto;
  color: ${({ theme }) => theme.color.primary};
  gap: 16px;
  align-self: stretch;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 782px;
  }
`

export const HeroText = () => {
  return (
    <StyledTextContainer>
      <Typography variant="h3">Web Developer with a Background in Content creation and marketing</Typography>
      <Typography variant="p">I'm a driven Web developer who turned my creative background into a new passion for coding. I thrive on solving complex challenges and bring fresh, design-minded thinking to every project. </Typography>
    </StyledTextContainer>
  )
}