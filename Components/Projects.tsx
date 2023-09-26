"use Client";
import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from "../public/Data/Projects";
import ProjectTabButton from "./ProjectTabButton";
import { useState, useTransition } from "react";

function Projects() {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };
  const filteredProjects = projectData.filter((project) => {
    return project.tag.includes(tag);
  });
  return (
    <>
      <h2 className="text-left md:text-center text-4xl font-bold text-white mt-4 mb-4 md:mb-8 ">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {/* the is selected is already defined, if the tag is ALL then is true if not is false, and this comes from the array that defines the data for the projects... somehow */}
        <ProjectTabButton
          name={"All"}
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTabButton
          name={"Web3"}
          onClick={handleTagChange}
          isSelected={tag === "Web3"}
        />
        <ProjectTabButton
          name={"Web2"}
          onClick={handleTagChange}
          isSelected={tag === "Web2"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {/* here we just map the result from the filter function we wrote above to look for the ones that have in the tag array the tag that we are selecting */}
        {filteredProjects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              imgUrl={project.image}
              description={project.description}
              title={project.title}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          );
        })}
      </div>
    </>
  );
}

export default Projects;
