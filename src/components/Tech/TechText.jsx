import styled from "styled-components"
import { P } from "../typography/P"

const StyledText = styled(P)`
  color: ${({ theme }) => theme.color.secondary};
`

export const TechText = () => {
  return <StyledText>HTML, CSS, Flexbox, JavaScript, ES6, Typescript, JSX, React, React Hooks, Node.js, Express.js, Mongo DB, Web Accessibility, APIs, mob-programming, pair-programming, GitHub.</StyledText>
}
