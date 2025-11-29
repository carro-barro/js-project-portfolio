import styled from "styled-components"
import { ArticleCardText } from "./ArticleCardText"
import { ArticleCardImage } from "./ArticleCardImage"
import { Button } from "../assets/Button"
import { Tag } from "../assets/Tag"

const StyledArticleCard = styled.div`
  display: flex;
  align-items: center;
  gap: 125px;
  align-self: stretch;
  justify-self: center;
  max-width: 1195px;
  widtH: 90%;
  max-height: 311px;
  margin: 0 auto 128px auto;

`
const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const StyledTextContent = styled.div`
 display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  width: 520px

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
  gap: 8px;
  align-self: stretch;
  margin-top: 32px;
`
const StyledArticleTag = styled(Tag)`
width: 142px;
`

export const ArticleCard = ({ name, info, image, date, link }) => {
  return (
    <StyledArticleCard>
      <ArticleCardImage src={image} alt={`Illustration for article: ${name}`} />
      <StyledTextContainer>
        <StyledTextContent>
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
        </StyledTextContent>
      </StyledTextContainer>
    </StyledArticleCard>
  )
}