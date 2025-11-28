import data from "../../data/projects.json"
import styled from "styled-components"

const StyledTextContainer = styled.div`
  display: flex;
  width: 580px;
  flex-direction: column;
  gap: 32px;
`

const StyledHeading = styled.h3`
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: black;
  margin: 0;
`

const StyledText = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: black;
  margin: 0;
  width: 520px;
`

export const ProjectCardText = ({ name, info }) => {
  return (
    <StyledTextContainer>
      <StyledHeading>{name}</StyledHeading>
      <StyledText>{info}</StyledText>
    </StyledTextContainer>
  )
}
