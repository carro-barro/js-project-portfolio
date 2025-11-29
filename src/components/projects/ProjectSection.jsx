
import { ProjectHeading } from "./ProjectHeading"
import { ProjectCard } from "./ProjectCard"
import data from "../../data/projects.json"

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
    </>
  )
}
