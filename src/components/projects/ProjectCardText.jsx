import data from "../../data/projects.json"
import styled from "styled-components"

const StyledTextContainer = styled.div`
display: flex;
`

const StyledHeading = styled.h3`
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: black;
`

const StyledText = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: black;
`

export const ProjectCardText = ({ name, info }) => {
  return (
    <StyledTextContainer>
      <StyledHeading>{name}</StyledHeading>
      <StyledText>{info}</StyledText>
    </StyledTextContainer>
  )
}
