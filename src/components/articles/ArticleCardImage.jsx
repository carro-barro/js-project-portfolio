import styled from "styled-components"

const StyledImage = styled.img`
width: 479px;
height: 311px;
object-fit: cover;
border-radius: 12px;
`

export const ArticleCardImage = ({ src, alt }) => {
  return <StyledImage src={src} alt={alt} />
}