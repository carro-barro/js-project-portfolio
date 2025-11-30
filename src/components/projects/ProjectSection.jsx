import styled from "styled-components"
import { ProjectHeading } from "./ProjectHeading"
import { ProjectCard } from "./ProjectCard"
import data from "../../data/projects.json"
import { Button } from "../assets/Button"

const StyledButton = styled(Button)`
  background: ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.primary};
  border: 2px solid ${({ theme }) => theme.color.primary};
  margin: 0 auto 128px auto;
`

export const ProjectSection = () => {
  return (
    <>
      <ProjectHeading />

      {data.projects.map((project, index) => (
        <ProjectCard
          key={project.name}
          tags={project.tags}
          name={project.name}
          info={project.info}
          netlify={project.netlify}
          github={project.github}
          image={project.image}
          index={index}
        />
      ))}
      <StyledButton
        href="https://github.com/carro-barro"
        text="See more projects"
        icon="/icons/ArrowDown.svg"
      />
    </>
  )
}
