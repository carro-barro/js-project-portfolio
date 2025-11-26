import styled from "styled-components"
import { TechHeading } from "./TechHeading"
import { TechText } from "./TechText"

const StyledTechSection = styled.div`
background-color: black;
color: white;
display: flex;
padding: 128px 0;
flex-direction: column;
align-items: center;
gap: 16px;
align-self: stretch;
margin-top: 98.13px
`
const StyledTextContainer = styled.div`
width: 782px;
`

export const TechSection = () => {
  return (
    <StyledTechSection>
      <StyledTextContainer>
        <TechHeading></TechHeading>
        <TechText></TechText>
      </StyledTextContainer>
    </StyledTechSection>
  )
}