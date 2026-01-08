import styled from "styled-components"
import { P } from "../typography/P"

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: center;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    align-items: flex-start;
  }
`

export const SkillInfo = ({ info }) => {

  return (
    <StyledInfoContainer>
      {info.map((item, index) => (
        <P key={index} style={{ color: 'white' }}>
          {item}
        </P>
      ))}
    </StyledInfoContainer>
  )
}