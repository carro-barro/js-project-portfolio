import styled from "styled-components"

const getPositionStyling = (position) => {
  switch (position) {
    case "left":
      return `
        transform: rotate(-4.695deg);
        margin-right: -160px;
        margin-top: 43px;
      `
    case "middle":
      return `
        z-index: 1;
      `
    case "right":
      return `
        transform: rotate(4.695deg);
        margin-left: -160px;
        margin-top: 43px;
      `
    default:
      return ""
  }
}

const StyledImage = styled.img`
 width: 358px;
 height: 382px;
 object-fit: cover;

 margin: 16px 0;
 border-radius: 12px;
${props => getPositionStyling(props.$position)}
`

export const HeroImage = (props) => {
  return <StyledImage $position={props.position} src={props.src} />
}