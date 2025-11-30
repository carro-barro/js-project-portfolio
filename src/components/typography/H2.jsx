import styled from "styled-components"

const StyledHeading = styled.h2`
text-align: center;
font-size: 80px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin: 0;
font-size: 48px;

@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  font-size: 80px;
}
`

export const H2 = ({ children }) => {
  return <StyledHeading>{children}</StyledHeading>
}