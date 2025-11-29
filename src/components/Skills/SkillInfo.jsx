import styled from "styled-components"
import { P } from "../typography/P"

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`

export const SkillInfo = ({ info }) => {
  const skillItems = info.split('\n')

  return (
    <StyledInfoContainer>
      {skillItems.map((item, index) => (
        <P key={index} style={{ color: 'white' }}>
          {item.trim()}
        </P>
      ))}
    </StyledInfoContainer>
  )
}