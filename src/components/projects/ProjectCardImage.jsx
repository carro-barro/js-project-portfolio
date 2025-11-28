
import styled from "styled-components"

const StyledImage = styled.img`
width: 479px;
height: 479px;
object-fit: cover;
border-radius: 12px;
box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`
export const ProjectCardImage = ({ src, alt }) => {
  return <StyledImage src={src} alt={alt} />
}

//gör object-position på recipe project