import styled from "styled-components"

const StyledHeading = styled.h1`
  margin: 0;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  font-size: 52px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin: 16px 0;
    font-size: 100px;
  }
`
export const H1 = ({ children }) => {
  return <StyledHeading>{children}</StyledHeading>
} 