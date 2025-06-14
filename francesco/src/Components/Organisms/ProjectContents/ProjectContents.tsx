import React from "react";

// Atoms
import InlineIcon from "../../Atoms/InlineComponents/InlineIcon";
import InlineImage from "../../Atoms/InlineComponents/InlineImage";

// SCSS
import "./ProjectContents.scss";

// Hooks
import { useSize } from "../../../Hooks/useSize";

const ProjectContents: React.FC = () => {
  const Size = useSize();

  return (
    <div className="project-contents">
      <div className="project-contents__skills">
        <InlineIcon folder="Icons" size="X" name="Ellipse" />
        <span className={`subtitle-about-${Size}`}>
          best brand di abigliamento in italia
        </span>
      </div>

      <div className="project-contents__image-wrapper">
        <InlineImage folder="Lavori" name="Amiuni-big" size="L" />
      </div>
    </div>
  );
};

export default ProjectContents;
