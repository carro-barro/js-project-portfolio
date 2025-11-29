import styled from "styled-components"

const StyledTagContainer = styled.div`
display: flex;
padding: 2px 6px;
justify-content: center;
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

export const Tag = ({ tag, className }) => {
  return (
    <>
      <StyledTagContainer className={className}>
        <StyledTagText>{tag}</StyledTagText>
      </StyledTagContainer>
    </>
  )
}