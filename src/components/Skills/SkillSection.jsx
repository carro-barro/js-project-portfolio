import styled from "styled-components"
import { SkillHeading } from "./SkillHeading"
import { SkillInfoCard } from "./SkillInfoCard"

const StyledSkillSection = styled.div`
display: flex;
padding: 128px 0;
flex-direction: column;
align-items: center;
gap: 16px;
align-self: stretch;
background: #000;
`





export const SkillSection = () => {
  return (
    <StyledSkillSection>
      <SkillHeading></SkillHeading>
      <SkillInfoCard></SkillInfoCard>
    </StyledSkillSection>
  )
}