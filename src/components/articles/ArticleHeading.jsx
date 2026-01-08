import styled from "styled-components"
import { Typography } from "../typography/Typography"

const StyledHeadingContainer = styled.div`
margin: 128px auto;
`

export const ArticleHeading = () => {
  return (
    <StyledHeadingContainer>
      <Typography variant="h2">My Words</Typography>
    </StyledHeadingContainer>
  )
}