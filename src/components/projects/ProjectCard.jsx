
import styled from "styled-components"
import { ProjectCardText } from "./ProjectCardText"
import { ProjectCardImage } from "./ProjectCardImage"

const StyledProjectCard = styled.div`
  display: flex;
`

export const ProjectCard = ({ name, info, image }) => {
  return (
    <StyledProjectCard>
      <ProjectCardText name={name} info={info} />
      <ProjectCardImage src={image} alt={`Screenshot of ${name}`} />
    </StyledProjectCard>
  )
}

