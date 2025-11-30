import styled from "styled-components"
import { SkillInfo } from "./SkillInfo"
import { SkillTags } from "./SkillTags"

const StyledInfoCard = styled.div`
display: flex;
width: 250px;
flex-direction: column;
align-items: flex-start;
gap: 16px;
flex-shrink: 0;
`

export const SkillInfoCard = ({ tag, info }) => {
  return (
    <StyledInfoCard>
      <SkillTags tag={tag} />
      <SkillInfo info={info} />
    </StyledInfoCard>
  )
}