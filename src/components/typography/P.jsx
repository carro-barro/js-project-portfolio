import styled from "styled-components"

const StyledText = styled.p`
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  font-size: 16px;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 18px;
  }
`
export const P = ({ children }) => {
  return <StyledText>{children}</StyledText>
}