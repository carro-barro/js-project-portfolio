import styled from "styled-components"

const StyledHeading = styled.h1`
  margin: 25px 0;
  font-size: 100px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
export const H1 = ({ children }) => {
  return <StyledHeading>{children}</StyledHeading>
} 