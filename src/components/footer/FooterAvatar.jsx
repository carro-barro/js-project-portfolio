import styled from "styled-components"

const StyledAvatar = styled.img`
width: 164px;
height: 164px;
border-radius: 164px;
object-fit: cover;
`

export const FooterAvatar = (props) => {
  return <StyledAvatar src={props.src} alt={props.alt} />
}