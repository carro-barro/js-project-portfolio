import styled from "styled-components"
import { H2 } from "../typography/H2"

const StyledHeading = styled(H2)`
color: white;
margin: 0;
`

export const SkillHeading = () => {
  return <StyledHeading>Skills</StyledHeading>
}