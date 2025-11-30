import styled from "styled-components"
import { HeroHeading } from "./HeroHeading"
import { HeroImage } from "./HeroImage"
import { HeroText } from "./HeroText"

const StyledImageContainer = styled.div`
display: flex;
justify-content: center;

margin: 32px 0;


`
export const StyledHeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 32px 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 48px 24px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-top: 128px;
  }
`


export const HeroSection = (props) => {
  return (
    <StyledHeroSection>
      <HeroHeading ></HeroHeading>
      <StyledImageContainer>
        <HeroImage position="left" src="/images/hero/SideProfile-heroImg-2.jpg" alt="side profile picture of carolina" />
        <HeroImage position="middle" src="/images/hero/Headshot-heroImg-1.png" alt="professional headshot of carolina" />
        <HeroImage position="right" src="/images/hero/Painting-heroImg-3.jpg" alt="picture of carolina painting" />
      </StyledImageContainer>
      <HeroText></HeroText>
    </StyledHeroSection>
  )
}