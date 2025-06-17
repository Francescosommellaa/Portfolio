import React from "react";
// import { useSize } from "../../../Hooks/useSize";
import { getPlaygroundProjects } from "../../../Utils/projectUtils";
import { useTransition } from "../../../Providers/TransitionProvider/TransitionContext";
import InlineImage from "../../Atoms/InlineItems/InlineImage";

// SCSS
import "./PlaygroundContents.scss";

const PlaygroundContents: React.FC = () => {
  // const Size = useSize();
  const { navigateWithTransition } = useTransition();

  const playgroundProjects = getPlaygroundProjects();

  return (
    <div className="playground-container">
      {playgroundProjects.map((project, index) => (
        <div
          key={index}
          className="playground-item"
          onClick={() => navigateWithTransition(project.link)}
        >
          <InlineImage folder="Lavori" name={project.img} size="L" />
        </div>
      ))}
    </div>
  );
};

export default PlaygroundContents;
