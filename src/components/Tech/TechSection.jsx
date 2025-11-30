import styled from "styled-components"
import { TechHeading } from "./TechHeading"
import { TechText } from "./TechText"

const StyledTechSection = styled.div`
background-color: ${({ theme }) => theme.color.primary};
color: white;
display: flex;
padding: 128px 0;
flex-direction: column;
align-items: center;
gap: 16px;
align-self: stretch;
margin-top: 98.13px;
`
const StyledTextContainer = styled.div`
  text-align: center;


  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 782px;
  }
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