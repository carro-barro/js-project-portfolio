
import styled from "styled-components"
import { Typography } from "../typography/Typography"

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
`
export const ProjectCardText = ({ name, info }) => {
  return (
    <StyledTextContainer>
      <Typography variant="h3">{name}</Typography>
      <Typography variant="p">{info}</Typography>
    </StyledTextContainer>
  )
}
