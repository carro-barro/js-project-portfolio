import styled from "styled-components"

const StyledImageLeft = styled.img`
 width: 358px;
 height: 382px;
 object-fit: cover;
 display: flex;
 justify-self: center;

 margin: 16px 0;
 border-radius: 12px;
`
export const HeroImageLeft = (props) => {
  return <StyledImageLeft src={props.src} />
}