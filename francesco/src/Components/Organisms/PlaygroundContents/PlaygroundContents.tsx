import React from "react";

// Atoms
import InlineImage from "../../Atoms/InlineItems/InlineImage";

// Scss
import "./PlaygroundContents.scss";

// Utils
import { getPlaygroundProjects } from "../../../Utils/projectUtils";

// Providers
import { useTransition } from "../../../Providers/TransitionProvider/TransitionContext";

// Animations
import { usePlaygroundAnimations } from "./AnimationPlaygroundContents";

const PlaygroundContents: React.FC = () => {
  const { navigateWithTransition } = useTransition();
  const playgroundProjects = getPlaygroundProjects();
  const containerRef = usePlaygroundAnimations();

  return (
    <div className="playground-container" ref={containerRef}>
      {playgroundProjects.map((project, index) => (
        <a
          key={index}
          className="playground-item"
          onClick={() => navigateWithTransition(project.link)}
        >
          <InlineImage folder="Lavori" name={project.img} size="L" />
        </a>
      ))}
    </div>
  );
};

export default PlaygroundContents;
