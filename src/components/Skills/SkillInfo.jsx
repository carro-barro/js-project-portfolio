import styled from "styled-components"



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
      <StyledInfo>HTML5
        CSS3
        Javascript ES6
        TypeScript
        Styled Components
        GitHub</StyledInfo>
      <StyledInfo>Atom
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
        Slack</StyledInfo>
      <StyledInfo>Node.js
        React
        MongoDB
        Express.js</StyledInfo>
      <StyledInfo>Branding
        Strategy
        Process Design
        Concept Development
        Agile methodology
        Accessibility (WCAG)
        Version Control (Git workflows)
        Creative Problem-Solving
        Cross-functional Collaboration
        UX & UI</StyledInfo>
    </>
  )
}