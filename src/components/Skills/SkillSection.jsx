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
    info: [
      "HTML5",
      "CSS3",
      "Javascript ES6",
      "TypeScript",
      "Styled Components",
      "GitHub"
    ]
  },
  {
    tag: "Toolbox",
    info: [
      "Atom",
      "Postman",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe InDesign",
      "Adobe Acrobat",
      "Adobe Premiere Pro & Rush",
      "Adobe After Effects",
      "Camera raw",
      "Bridge",
      "Wordpress",
      "Sitecore (CMS)",
      "Sitevison (CMS)",
      "Shopify",
      "Figma",
      "Microsoft (Word, ppt, etc)",
      "Slack"
    ]
  },
  {
    tag: "Upcoming",
    info: [
      "Node.js",
      "React",
      "MongoDB",
      "Express.js"
    ]
  },
  {
    tag: "More",
    info: [
      "Branding",
      "Strategy",
      "Process Design",
      "Concept Development",
      "Agile methodology",
      "Accessibility (WCAG)",
      "Version Control (Git workflows)",
      "Creative Problem-Solving",
      "Cross-functional Collaboration",
      "UX & UI"
    ]
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