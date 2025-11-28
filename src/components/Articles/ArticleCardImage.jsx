import styled from "styled-components"

const StyledImage = styled.img`
width: 479px;
align-self: stretch;
border-radius: 12px;
`

export const ArticleImage = ({ src, alt }) => {
  return <StyledImage src={src} alt={alt} />
}