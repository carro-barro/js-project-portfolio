import styled from "styled-components"

const StyledImage = styled.img`
  object-fit: cover;
  border-radius: 12px;
  align-self: stretch;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
  width: 100%;
  height: 200px;
}

@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  width: 200px;
}

@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  width: 479px;
  height: 320px;
}
`

export const ArticleCardImage = ({ src, alt }) => {
  return <StyledImage src={src} alt={alt} />
}