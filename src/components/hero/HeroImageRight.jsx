import styled from "styled-components"
import { StyledBaseImages } from "./HeroBaseImages"

const StyledImageRight = styled(StyledBaseImages)`
 transform: rotate(4.695deg);
 margin-left: -160px;
 margin-top: 43px;
`

export const HeroImageRight = (props) => {
  return <StyledImageRight src={props.src} />
}