import React, { useState } from "react";

// Scss
import "./CarouselWorks.scss";

// Atoms
import InlineImage from "../../Atoms/InlineItems/InlineImage";

// Hooks
import { useSize } from "../../../Hooks/useSize";
import { useHorizontalScroll } from "../../../Hooks/useHorizontalScroll";

// Providers
import { useTransition } from "../../../Providers/TransitionProvider/TransitionContext";

// Data
import { projectsData } from "../../Data/ProjectsData";

const Works: React.FC = () => {
  const Size = useSize();
  const [hasMoved, setHasMoved] = useState(false);
  const scrollRef = useHorizontalScroll(setHasMoved);
  const { navigateWithTransition } = useTransition();

  return (
    <div className="project-container" ref={scrollRef}>
      {projectsData.map((yearBlock) => (
        <div key={yearBlock.year} className="year-block">
          <div className="year-title">
            <h2 className={`num-${Size}`}>
              <span className={`num-script-${Size}`}>20</span>
              {yearBlock.year}
            </h2>
            <span className="caption-X">
              {yearBlock.projects.length} PROGETTI
            </span>
          </div>
          <div className="projects">
            {yearBlock.projects.map((project) => (
              <a
                key={project.name}
                className="project"
                onClick={(e) => {
                  if (hasMoved) {
                    e.preventDefault();
                    return;
                  }
                  navigateWithTransition(project.link);
                }}
                draggable={false}
              >
                <div className="project-img">
                  <InlineImage folder="Lavori" name={project.img} size={Size} />
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Works;
