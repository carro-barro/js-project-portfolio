import styled from "styled-components"
import { HeroHeading } from "./HeroHeading"
import { HeroImageLeft } from "./HeroImageLeft"
import { HeroImageMiddle } from "./HeroImageMiddle"
import { HeroImageRight } from "./HeroImageRight"
import { HeroText } from "./HeroText"

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
        <HeroImageLeft src="/images/SideProfile-heroImg-2.jpg" />
        <HeroImageMiddle src="/images/Headshot-heroImg-1.png" />
        <HeroImageRight src="/images/Painting-heroImg-3.jpg" />
      </StyledImageContainer>
      <HeroText></HeroText>
    </>
  )
}