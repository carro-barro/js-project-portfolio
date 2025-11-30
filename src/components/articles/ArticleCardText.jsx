import styled from "styled-components"
import { H3 } from "../typography/H3"
import { P } from "../typography/P"


const StyledTextContainer = styled.div`
  display: flex;
  width: 580px;
  flex-direction: column;
  gap: 16px;
`

export const ArticleCardText = ({ name, info }) => {
  return (
    <StyledTextContainer>
      <H3>{name}</H3>
      <P>{info}</P>
    </StyledTextContainer>
  )
}