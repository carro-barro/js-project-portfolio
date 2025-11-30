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

@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: center;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    align-items: flex-start;
  }
`

export const SkillInfoCard = ({ tag, info }) => {
  return (
    <StyledInfoCard>
      <SkillTags tag={tag} />
      <SkillInfo info={info} />
    </StyledInfoCard>
  )
}