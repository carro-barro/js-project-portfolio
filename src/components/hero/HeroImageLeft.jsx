import styled from "styled-components"
import { StyledBaseImages } from "./HeroBaseImages"

const StyledImageLeft = styled(StyledBaseImages)`
transform: rotate(-4.695deg);
margin-right: -160px;
margin-top: 43px;
`
export const HeroImageLeft = (props) => {
  return <StyledImageLeft src={props.src} />
}