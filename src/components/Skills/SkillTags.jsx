import styled from "styled-components"


const StyledTag = styled.div`
display: flex;
height: 28px;
padding: 2px 6px;
justify-content: center;
align-items: center;
align-self: stretch;
border-radius: 4px;
border: 1px solid ${({ theme }) => theme.color.secondary};
background: ${({ theme }) => theme.color.primary};
`

const StyledTagText = styled.p`
color: ${({ theme }) => theme.color.secondary};
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin: 0;
`

export const SkillTags = ({ tag }) => {
  return (
    <StyledTag>
      <StyledTagText>{tag}</StyledTagText>
    </StyledTag>
  )
}