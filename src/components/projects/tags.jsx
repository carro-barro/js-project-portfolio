import styled from "styled-components"
import data from "../../data/projects.json"

const StyledTagContainer = styled.div`
display: flex;
// padding: 2px 6px;
justify-content: center;
flex: 1 0 0;
height: 28px;


border-radius: 4px;
border: 1px solid #000;
background: #FFF;
`

const StyledTagText = styled.p`
color: #000;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin: auto;
`

export const Tag = ({ tag }) => {
  return (
    <>
      <StyledTagContainer>
        <StyledTagText>{tag}</StyledTagText>
      </StyledTagContainer>
    </>
  )
}