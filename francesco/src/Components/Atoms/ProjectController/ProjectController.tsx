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

// Modifica: ora accetta il contesto
interface ProjectControllerProps {
  context: "Lavori" | "Playground";
}

const ProjectController: React.FC<ProjectControllerProps> = ({ context }) => {
  const { navigateWithTransition } = useTransition();
  const isVisible = useSmartScrollVisibility({
    hideOnTop: true,
    initiallyVisible: false,
  });

  const { projectId } = useParams<{ projectId: string }>();

  const allProjects = getAllProjects();

  // Qui filtriamo i progetti in base al contesto
  const filteredProjects = allProjects.filter((p) => {
    if (context === "Lavori") return p.client !== "";
    if (context === "Playground") return p.client === "";
    return true;
  });

  const filteredProjectsWithSlug = filteredProjects.map((p) => ({
    ...p,
    slug: getProjectSlug(p),
  }));

  const currentIndex = filteredProjectsWithSlug.findIndex(
    (p) => p.slug === projectId
  );

  const previousProject =
    currentIndex > 0 ? filteredProjectsWithSlug[currentIndex - 1] : null;

  const nextProject =
    currentIndex < filteredProjectsWithSlug.length - 1
      ? filteredProjectsWithSlug[currentIndex + 1]
      : null;

  if (!isVisible) return null;

  return (
    <div className="project-controller">
      {previousProject && (
        <div className="project-controller__button">
          <GlassButton
            onClick={() =>
              navigateWithTransition(`/Lavori/${previousProject.slug}`)
            }
          >
            <InlineIcon folder="Icons" name="LeftArrow" size="X" />
          </GlassButton>
        </div>
      )}

      <div className="project-controller__button">
        <GlassButton
          onClick={() =>
            navigateWithTransition(
              context === "Lavori" ? "/Lavori" : "/Playground"
            )
          }
        >
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
