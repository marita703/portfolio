"use Client";
import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from "../public/Data/Projects";
import ProjectTabButton from "./ProjectTabButton";
import { useState, useTransition, useRef } from "react";
import { motion, useInView } from "framer-motion";

function Projects() {
  // this is for using the animation, if the object that I want to animate is not going to be visible in the first reload of the website. Then we need useRef (from react) and useInView (from motion) in order to set from when we want to see the animation

  const ref = useRef(null);

  //so this define a referece on the page, and once this point of reference is in the view of the user after scrolling, then the effect takes place.
  const isInView = useInView(ref, { once: true });

  // for the animation, we can also define states, since we want the cards to appear one after the other.

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };
  const filteredProjects = projectData.filter((project) => {
    return project.tag.includes(tag);
  });
  return (
    <section>
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
      {/* from here we want our ref to take place */}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {/* here we just map the result from the filter function we wrote above to look for the ones that have in the tag array the tag that we are selecting */}
        {filteredProjects.map((project, index) => {
          return (
            // so first, we pass cardVariants as a prop for the parameter variants, then initial, we choose the first state that is inside of the animation that we described in the cardVariants, and then in animate, we only pass the animation inside the cardVariants when isInview is true. each project will be delayed by whatever the index is, multiply by the number (this is custumazible)
            <motion.li
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                imgUrl={project.image}
                description={project.description}
                title={project.title}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}

export default Projects;
