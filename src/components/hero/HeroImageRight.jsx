import styled from "styled-components"

const StyledImageRight = styled.img`
 width: 358px;
 height: 382px;
 object-fit: cover;
 display: flex;
 justify-self: center;

 margin: 16px 0;
 border-radius: 12px;
`

export const HeroImageRight = (props) => {
  return <StyledImageRight src={props.src} />
}