import styled from "styled-components"
import { SkillInfo } from "./SkillInfo"
import { SkillTags } from "./SkillTags"

const StyledInfoContainer = styled.div`
display: flex;
width: 177px;
flex-direction: column;
align-items: flex-start;
gap: 16px;
flex-shrink: 0;
`

const StyledInfoCard = styled.div`
display: flex;
width: 177px;
flex-direction: column;
align-items: flex-start;
gap: 16px;
flex-shrink: 0;
`

export const SkillInfoCard = () => {
  return (
    <StyledInfoContainer>
      <StyledInfoCard>
        <SkillTags></SkillTags>
        <SkillInfo></SkillInfo>
      </StyledInfoCard>
    </StyledInfoContainer>
  )
}