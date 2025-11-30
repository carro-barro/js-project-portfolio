import styled from "styled-components"
import { SkillHeading } from "./SkillHeading"
import { SkillInfoCard } from "./SkillInfoCard"

const StyledSkillSection = styled.div`
display: flex;
padding: 128px 0;
flex-direction: column;
align-items: center;
align-self: stretch;
background: #000;
color: white;
`

const skillsData = [
  {
    tag: "Code",
    info: "HTML5\nCSS3\nJavascript ES6\nTypeScript\nStyled Components\nGitHub",
  },
  {
    tag: "Toolbox",
    info: "Atom\nPostman\nAdobe Photoshop\nAdobe Illustrator\nAdobe InDesign\nAdobe Acrobat\nAdobe Premiere Pro & Rush\nAdobe After Effects\nCamera raw\nBridge\nWordpress\nSitecore (CMS)\nSitevison (CMS)\nShopify\nFigma\nMicrosoft (Word, ppt, etc)\nSlack",
  },
  {
    tag: "Upcoming",
    info: "Node.js\nReact\nMongoDB\nExpress.js",
  },
  {
    tag: "More",
    info: "Branding\nStrategy\nProcess Design\nConcept Development\nAgile methodology\nAccessibility (WCAG)\nVersion Control (Git workflows)\nCreative Problem-Solving\nCross-functional Collaboration\nUX & UI",
  },
]

const StyledCardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  max-width: 803px;
  width: 90%;
  margin-top: 0;
`

export const SkillSection = () => {
  return (
    <StyledSkillSection>
      <SkillHeading />
      <StyledCardContainer>
        {skillsData.map((skill) => (
          <SkillInfoCard key={skill.tag} tag={skill.tag} info={skill.info} />
        ))}
      </StyledCardContainer>
    </StyledSkillSection>
  )
}