import styled from "styled-components"
import { H2 } from "../typography/H2"

const StyledHeading = styled(H2)`
color: white;
`

export const SkillHeading = () => {
  return <StyledHeading>Skills</StyledHeading>
}