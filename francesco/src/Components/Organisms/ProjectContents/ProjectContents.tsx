import React from "react";

// Atoms
import InlineIcon from "../../Atoms/InlineItems/InlineIcon";
import InlineImage from "../../Atoms/InlineItems/InlineImage";

// SCSS
import "./ProjectContents.scss";

// Hooks
import { useSize } from "../../../Hooks/useSize";

interface ProjectContentsProps {
  brandShortDescription: string;
  bigHorizontalImg: string;
}

const ProjectContents: React.FC<ProjectContentsProps> = ({
  brandShortDescription,
  bigHorizontalImg,
}) => {
  const Size = useSize();

  return (
    <div className="project-contents">
      <div className="project-contents__skills">
        <InlineIcon folder="Icons" size="X" name="Ellipse" />
        <span className={`subtitle-about-${Size}`}>
          {brandShortDescription}
        </span>
      </div>

      <div className="project-contents__image-wrapper">
        <InlineImage folder="Lavori" name={bigHorizontalImg} size="L" />
      </div>
    </div>
  );
};

export default ProjectContents;
