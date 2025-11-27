import styled from "styled-components"
import { HeroHeading } from "./HeroHeading"
import { HeroImage } from "./HeroImage"
import { HeroText } from "./Herotext"

const StyledImageContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`


export const HeroSection = (props) => {
  return (
    <>
      <HeroHeading ></HeroHeading>
      <StyledImageContainer>
        <HeroImage position="left" src="/images/hero/SideProfile-heroImg-2.jpg" />
        <HeroImage position="middle" src="/images/hero/Headshot-heroImg-1.png" />
        <HeroImage position="right" src="/images/hero/Painting-heroImg-3.jpg" />
      </StyledImageContainer>
      <HeroText></HeroText>
    </>
  )
}