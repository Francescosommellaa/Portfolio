import React from "react";
import { useParams } from "react-router-dom";

// Atoms
import InlineIcon from "../InlineItems/InlineIcon";
import GlassButton from "../GlassButton/GlassButton";

// Scss
import "./ProjectController.scss";

// Hooks
import { useSmartScrollVisibility } from "../../../Hooks/useScrollDirection";
import { useTransition } from "../../../Providers/TransitionProvider/TransitionContext";

// Utils
import { getAllProjects, getProjectSlug } from "../../../Utils/projectUtils";

const ProjectController: React.FC = () => {
  const { navigateWithTransition } = useTransition();
  const isVisible = useSmartScrollVisibility({
    hideOnTop: true,
    initiallyVisible: false,
  });

  // Previous and next projects
  const { projectId } = useParams<{ projectId: string }>();
  const allProjects = getAllProjects();
  const currentIndex = allProjects.findIndex(
    (p) => getProjectSlug(p) === projectId
  );
  const previousProject =
    currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < allProjects.length - 1
      ? allProjects[currentIndex + 1]
      : null;

  if (!isVisible) return null;

  return (
    <div className="project-controller">
      {previousProject && (
        <div className="project-controller__button">
          <GlassButton
            onClick={() =>
              navigateWithTransition(
                `/Lavori/${getProjectSlug(previousProject)}`
              )
            }
          >
            <InlineIcon folder="Icons" name="LeftArrow" size="X" />
          </GlassButton>
        </div>
      )}

      <div className="project-controller__button">
        <GlassButton onClick={() => navigateWithTransition("/Lavori")}>
          <InlineIcon folder="Icons" name="CloseProject" size="X" />
        </GlassButton>
      </div>

      {nextProject && (
        <div className="project-controller__button">
          <GlassButton
            onClick={() =>
              navigateWithTransition(`/Lavori/${getProjectSlug(nextProject)}`)
            }
          >
            <InlineIcon folder="Icons" name="RightArrow" size="X" />
          </GlassButton>
        </div>
      )}
    </div>
  );
};

export default ProjectController;
