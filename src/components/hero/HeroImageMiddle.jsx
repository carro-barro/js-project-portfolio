import styled from "styled-components"


const StyledImageMiddle = styled.img`
 width: 358px;
 height: 382px;
 object-fit: cover;
 display: flex;
 justify-self: center;

 margin: 16px 0;
 border-radius: 12px;
`

export const HeroImageMiddle = (props) => {
  return <StyledImageMiddle src={props.src} />
}