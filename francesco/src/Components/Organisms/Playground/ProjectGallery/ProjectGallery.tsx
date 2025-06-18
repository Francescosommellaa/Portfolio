import React from "react";

// Atoms
import InlineImage from "../../../Atoms/InlineItems/InlineImage";

// Scss
import "./ProjectGallery.scss";

// Utils
import { getPlaygroundProjects } from "../../../../Utils/projectUtils";

// Providers
import { useTransition } from "../../../../Providers/TransitionProvider/TransitionContext";

// Animations
import { usePlaygroundAnimations } from "./AnimationPlaygroundContents";

const ProjectGallery: React.FC = () => {
  const { navigateWithTransition } = useTransition();
  const playgroundProjects = getPlaygroundProjects();
  const containerRef = usePlaygroundAnimations();

  return (
    <div className="project-gallery" ref={containerRef}>
      {playgroundProjects.map((project, index) => (
        <a
          key={index}
          className="project-gallery__items"
          onClick={() => navigateWithTransition(project.link)}
        >
          <InlineImage folder="Lavori" name={project.img} size="X" />
        </a>
      ))}
    </div>
  );
};

export default ProjectGallery;
