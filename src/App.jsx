import styled, { createGlobalStyle } from "styled-components"
import { HeroSection } from "./components/hero/HeroSection"
import { TechSection } from "./components/Tech/TechSection"
import { ProjectSection } from "./components/projects/ProjectSection"
import { SkillSection } from "./components/Skills/SkillSection"

const GlobalStyles = createGlobalStyle`

body {
font-family: "Poppins", sans-serif;
margin: 0;
}
`

export const App = () => {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <HeroSection></HeroSection>
      <TechSection></TechSection>
      <ProjectSection></ProjectSection>
      <SkillSection></SkillSection>
    </>
  )
}
