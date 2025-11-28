import styled from "styled-components"


const StyledTag = styled.div`
display: flex;
height: 28px;
padding: 2px 6px;
justify-content: center;
align-items: flex-start;
align-self: stretch;
border-radius: 4px;
border: 1px solid #FFF;
background: #000;
`

const StyledTagText = styled.p`
color: #FFF;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
`

export const SkillTags = () => {
  return (
    <>
      <StyledTag>
        <StyledTagText>Code</StyledTagText>
      </StyledTag>
      <StyledTag>
        <StyledTagText>Toolbox</StyledTagText>
      </StyledTag>
      <StyledTag>
        <StyledTagText>Upcoming</StyledTagText>
      </StyledTag>
      <StyledTag>
        <StyledTagText>More</StyledTagText>
      </StyledTag>
    </>
  )
}