
import styled from "styled-components"
import { ProjectCardText } from "./ProjectCardText"
import { ProjectCardImage } from "./ProjectCardImage"
import { Button } from "./Button"
import { Tag } from "./Tags"

const StyledProjectCard = styled.div`
  display: flex;
  align-items: center;
  gap: 125px;
  align-self: stretch;
  justify-self: center;
  margin: 0 128px 128px 128px;
  width: 1184px;

`
const StyledLeftContainer = styled.div`
display: flex;
`

const StyledLeftContent = styled.div`
 display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  height: 376px;
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

export const ProjectCard = ({ name, info, netlify, github, image, tags }) => {
  return (
    <StyledProjectCard>
      <StyledLeftContainer>
        <StyledLeftContent>
          <StyledTagContainer>
            {tags.map(tag => (
              <Tag key={tag} tag={tag} />
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
      <ProjectCardImage src={image} alt={`Screenshot of ${name}`} />
    </StyledProjectCard>
  )
}

