import React from "react";

// Atoms
import InlineImage from "../../../Atoms/InlineItems/InlineImage";

// Data
import playgroundProjects from "../../../../Data/PlaygroundData";

// Style
import "./ProjectGallery.scss";

// Animation
import { useAnimationProjectGallery } from "./UseAnimationProjectGallery";

// Hooks
import { useSize } from "../../../../Hooks/useSize";

const ProjectGallery: React.FC = () => {
  const containerRef = useAnimationProjectGallery();
  const Size = useSize();

  return (
    <div className="project-gallery" ref={containerRef}>
      {playgroundProjects.map((project, index) => (
        <div key={index} className="project-gallery__container">
          <div className="image-wrapper">
            <InlineImage
              folder="Lavori/PlayGround"
              name={project.img}
              size="X"
              type="jpg"
            />
          </div>
          <div className="info">
            <span className={`subtitle-about-${Size}`}>(20{project.year})</span>
            <div className="text">
              <span className={`paragraph-small-${Size}`}>
                {project.category}
              </span>
              <span className={`paragraph-small-${Size}`}>{project.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery;
