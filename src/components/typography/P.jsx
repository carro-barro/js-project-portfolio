import styled from "styled-components"

const StyledText = styled.p`
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`
export const P = ({ children }) => {
  return <StyledText>{children}</StyledText>
}