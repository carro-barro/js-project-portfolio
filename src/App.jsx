import styled, { createGlobalStyle } from "styled-components"
import { HeroSection } from "./components/hero/HeroSection"
import { TechSection } from "./components/Tech/TechSection"
import { ProjectsSection } from "./components/projects/ProjectsSection"

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body {
font-family: Poppins;
margin: 0;
}
`

export const App = () => {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <HeroSection></HeroSection>
      <TechSection></TechSection>
      <ProjectsSection></ProjectsSection>
    </>
  )
}
