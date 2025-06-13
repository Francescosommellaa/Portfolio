import React from "react";

// Scss
import "./ProjectContents.scss";

// Hooks
import { useSize } from "../../../Hooks/useSize";

// Data
import { projectsData } from "../../Data/ProjectsData";

const ProjectContents: React.FC = () => {
  const Size = useSize();
  return (
    <div>
      {projectsData.map((yearBlock) => (
        <div className="year-title">
          <h2 className={`num-${Size}`}>
            <span className={`num-script-${Size}`}>20</span>
            {yearBlock.year}
          </h2>
          <span className="caption-X">
            {yearBlock.projects.length} PROGETTI
          </span>
        </div>
      ))}
      ;
    </div>
  );
};

export default ProjectContents;
