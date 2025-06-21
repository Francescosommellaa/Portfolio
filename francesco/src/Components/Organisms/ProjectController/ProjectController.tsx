import React from "react";
import { useParams } from "react-router-dom";

// Atoms
import InlineIcon from "../../Atoms/InlineItems/InlineIcon";
import GlassButton from "../../Atoms/GlassButton/GlassButton";

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

  const { projectId } = useParams<{ projectId: string }>();
  const allProjects = getAllProjects();

  const projectsWithSlug = allProjects.map((p) => ({
    ...p,
    slug: getProjectSlug(p),
  }));

  const currentIndex = projectsWithSlug.findIndex((p) => p.slug === projectId);

  const previousProject =
    currentIndex > 0 ? projectsWithSlug[currentIndex - 1] : null;

  const nextProject =
    currentIndex < projectsWithSlug.length - 1
      ? projectsWithSlug[currentIndex + 1]
      : null;

  if (!isVisible) return null;

  return (
    <div className="project-controller">
      {previousProject && (
        <div className="project-controller__button">
          <GlassButton
            onClick={() =>
              navigateWithTransition(`Lavori/${previousProject.slug}`)
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
              navigateWithTransition(`/Lavori/${nextProject.slug}`)
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
