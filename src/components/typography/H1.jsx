import styled from "styled-components"

const StyledHeading = styled.h1`
  margin: 16px 0;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
export const H1 = ({ children }) => {
  return <StyledHeading>{children}</StyledHeading>
} 