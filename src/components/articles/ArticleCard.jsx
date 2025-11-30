import styled from "styled-components"
import { ArticleCardText } from "./ArticleCardText"
import { ArticleCardImage } from "./ArticleCardImage"
import { Button } from "../assets/Button"
import { Tag } from "../assets/Tag"

const StyledArticleCard = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  gap: 32px;
  margin: 0 auto 64px auto;
  flex-direction: column;
  width: 90%;
  max-width: 1195px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: flex-start;
    flex-direction: row;
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 125px;
    margin: 0 auto 128px auto;
    
  }
`
const StyledTextContainer = styled.div`
 display: flex;
flex-direction: column;
align-items: center;
gap: 32px;
align-self: stretch;

@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 464px;
    flex: 1 0 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 580px;
    gap: 16px;
  }

`

const StyledTagContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  margin-top: 16px;
`
const StyledArticleTag = styled(Tag)`
width: 142px;
`

export const ArticleCard = ({ name, info, image, date, link }) => {
  return (
    <StyledArticleCard>
      <ArticleCardImage src={image} alt={`Illustration for article: ${name}`} />
      <StyledTextContainer>
        <StyledTagContainer>
          {date.map(singleDate => (
            <StyledArticleTag key={singleDate} tag={singleDate} />
          ))}
        </StyledTagContainer>
        <ArticleCardText name={name} info={info} />
        <StyledButtonContainer>
          <Button
            href={link}
            text="Read article"
            icon="/icons/Netlify.svg" />
        </StyledButtonContainer>
      </StyledTextContainer>
    </StyledArticleCard>
  )
}