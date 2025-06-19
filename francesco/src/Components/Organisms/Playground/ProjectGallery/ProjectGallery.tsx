import React from "react";

// Atoms
import InlineImage from "../../../Atoms/InlineItems/InlineImage";

// Data
import playgroundProjects from "../../../../Data/PlaygroundData";

// Style
import "./ProjectGallery.scss";

// Animation
import { useAnimationProjectGallery } from "./UseAnimationProjectGallery";

const ProjectGallery: React.FC = () => {
  const containerRef = useAnimationProjectGallery();

  return (
    <div className="project-gallery" ref={containerRef}>
      {playgroundProjects.map((project, index) => (
        <div key={index} className="project-gallery__item">
          <div className="image-wrapper">
            <InlineImage folder="Lavori" name={project.img} size="X" />
          </div>
          <div className="project-gallery__text">
            <p className="year">({project.year})</p>
            <p className="category">{project.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery;
