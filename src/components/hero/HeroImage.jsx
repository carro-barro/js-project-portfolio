import styled from "styled-components"

const getPositionStyling = (position) => {
  switch (position) {
    case "left":
      return `
        transform: rotate(-4.695deg);
      `
    case "middle":
      return `
        z-index: 1;
      `
    case "right":
      return `
        transform: rotate(4.695deg);
      `
    default:
      return ""
  }
}

const StyledImage = styled.img`
  object-fit: cover;
  border-radius: 12px;
  ${props => getPositionStyling(props.$position)};

  /* MOBILE */
  width: 144px;
  height: 154px;

    ${props =>
    props.$position === "left"
      ? `margin-right: -76px; margin-top: 26px;`
      : props.$position === "right"
        ? `margin-left: -76px; margin-top: 26px;`
        : `margin: 16px 0;`}

  /* TABLET */
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 200px;
    height: 220px;

      /* Apply correct desktop overlap */
    ${props =>
    props.$position === "left"
      ? `margin-right: -114px; margin-top: 32px;`
      : props.$position === "right"
        ? `margin-left: -114px; margin-top: 32px;`
        : `margin: 16px 0;`}
}

  /* DESKTOP */
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 358px;
    height: 382px;

    /* Apply correct desktop overlap */
    ${props =>
    props.$position === "left"
      ? `margin-right: -160px; margin-top: 43px;`
      : props.$position === "right"
        ? `margin-left: -160px; margin-top: 43px;`
        : `margin: 16px 0;`}
  }
}
`

export const HeroImage = (props) => {
  return <StyledImage $position={props.position} src={props.src} alt={props.alt} />
}