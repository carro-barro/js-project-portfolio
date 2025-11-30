import styled from "styled-components"

const StyledHeading = styled.h3`
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
`
export const H3 = ({ children }) => {
  return <StyledHeading>{children}</StyledHeading>
}