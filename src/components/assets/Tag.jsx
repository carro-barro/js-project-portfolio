import styled from "styled-components"

const StyledTagContainer = styled.div`
display: flex;
padding: 2px 6px;
justify-content: center;
height: 28px;
border-radius: 4px;
border: 1px solid ${({ theme }) => theme.color.primary};
background: ${({ theme }) => theme.color.secondary};
`

const StyledTagText = styled.p`
color: ${({ theme }) => theme.color.primary};
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