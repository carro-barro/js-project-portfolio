
import { ProjectHeading } from "./ProjectHeading"
import { ProjectCard } from "./ProjectCard"
import data from "../../data/projects.json"

export const ProjectSection = () => {
  return (
    <>
      <ProjectHeading />

      {data.projects.map(project => (
        <ProjectCard
          key={project.name}
          name={project.name}
          info={project.info}
          image={project.image}
        />
      ))}
    </>
  );
};
