import styled from "styled-components"
import { P } from "../typography/P"


const StyledInfo = styled.p`
color: #FFF;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

export const SkillInfo = () => {
  return (
    <>
      <P>HTML5
        CSS3
        Javascript ES6
        TypeScript
        Styled Components
        GitHub</P>
      <P>Atom
        Postman
        Adobe Photoshop
        Adobe Illustrator
        Adobe InDesign
        Adobe Acrobat
        Adobe Premiere Pro & Rush
        Adobe After Effects
        Camera raw
        Bridge
        Wordpress
        Sitecore (CMS) Sitevison (CMS) Shopify
        Figma
        Microsoft (Word, ppt, etc)
        Slack</P>
      <P>Node.js
        React
        MongoDB
        Express.js</P>
      <P>Branding
        Strategy
        Process Design
        Concept Development
        Agile methodology
        Accessibility (WCAG)
        Version Control (Git workflows)
        Creative Problem-Solving
        Cross-functional Collaboration
        UX & UI</P>
    </>
  )
}