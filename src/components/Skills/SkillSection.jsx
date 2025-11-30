import styled from "styled-components"
import { SkillHeading } from "./SkillHeading"
import { SkillInfoCard } from "./SkillInfoCard"

const StyledSkillSection = styled.div`
display: flex;

flex-direction: column;
align-items: center;
align-self: stretch;
background: ${({ theme }) => theme.color.primary};
color: ${({ theme }) => theme.color.secondary};
padding: 64px 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 64px 24px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 128px 0;
  }
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
  gap: 24px;
  max-width: 803px;
  width: 90%;
  margin-top: 0;
  align-items: flex-start;
  align-self: stretch;
  flex-direction: column;
  
   @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: center;
    align-self: center;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    width: 982px;
    justify-content: center;
    align-self: center;
   align-items: flex-start;
  }
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