
import styled from "styled-components"

const StyledImage = styled.img`
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  object-position: ${props => props.$position || 'center'};
  height: 479px;
  align-self: stretch;


  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 479px;
    height: 479px;
  }

`
export const ProjectCardImage = ({ src, alt, position }) => {
  return <StyledImage src={src} alt={alt} $position={position} />
}