
import styled from "styled-components"
import { ProjectCardText } from "./ProjectCardText"
import { ProjectCardImage } from "./ProjectCardImage"
import { Tag } from "../assets/Tag"
import { Button } from "../assets/Button"



const StyledProjectCard = styled.div`
  display: flex;
  align-items: center;
  gap: 125px;
  align-self: stretch;
  justify-content: center;
  max-width: 1184px;
  width: 90%;
  margin: 0 auto 128px auto;
  flex-direction: ${props => (props.$reverse ? 'row-reverse' : 'row')}
`
const StyledLeftContainer = styled.div`
display: flex;
`

const StyledLeftContent = styled.div`
 display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 16px;
  align-self: stretch;
  max-height: 322px;
  max-width: 580px;
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
`
const StyledProjectTag = styled(Tag)`
flex: 1 0 0;
`

export const ProjectCard = ({ name, info, netlify, github, image, tags, index }) => {
  const shouldReverse = index % 2 !== 0

  return (
    <StyledProjectCard $reverse={shouldReverse}>
      <ProjectCardImage src={image} alt={`Screenshot of ${name}`} />
      <StyledLeftContainer>
        <StyledLeftContent>
          <StyledTagContainer>
            {tags.map(tag => (
              <StyledProjectTag key={tag} tag={tag} />
            ))}
          </StyledTagContainer>
          <ProjectCardText name={name} info={info} />
          <StyledButtonContainer>
            <Button
              href={netlify}
              text="Live Demo"
              icon="/icons/Netlify.svg" />
            <Button
              href={github}
              text="View code"
              icon="/icons/Github.svg" />
          </StyledButtonContainer>
        </StyledLeftContent>
      </StyledLeftContainer>
    </StyledProjectCard>
  )
}

