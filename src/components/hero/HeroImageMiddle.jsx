import styled from "styled-components"
import { StyledBaseImages } from "./HeroBaseImages"


const StyledImageMiddle = styled(StyledBaseImages)`
z-index: 1;
`

export const HeroImageMiddle = (props) => {
  return <StyledImageMiddle src={props.src} />
}