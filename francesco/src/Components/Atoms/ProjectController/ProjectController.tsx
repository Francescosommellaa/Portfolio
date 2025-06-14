import React from "react";
import { useParams } from "react-router-dom";

// Atoms
import InlineIcon from "../InlineItems/InlineIcon";

// Scss
import "./ProjectController.scss";

// Hooks
import { useScrollDirection } from "../../../Hooks/useScrollDirection";
import { useTransition } from "../../../Providers/TransitionProvider/TransitionContext";

// Data
import { projectsData, Project } from "../../Data/ProjectsData";

const ProjectController: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const isVisible = useScrollDirection();
  const { navigateWithTransition } = useTransition();

  // Flat list con tipizzazione Project[]
  const allProjects: Project[] = projectsData.flatMap((year) => year.projects);

  // Helper per estrarre lo slug finale
  const getProjectSlug = (project: Project): string => {
    return project.link.split("/").pop() ?? "";
  };

  // Troviamo l'indice corrente
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
        <button
          className="project-controller__button left"
          onClick={() =>
            navigateWithTransition(`/Lavori/${getProjectSlug(previousProject)}`)
          }
        >
          <InlineIcon folder="Icons" name="Left-arrow" size="X" />
        </button>
      )}
      <button
        className="project-controller__button center"
        onClick={() => navigateWithTransition("/Lavori")}
      >
        <InlineIcon folder="Icons" name="Close-project" size="X" />
      </button>
      {nextProject && (
        <button
          className="project-controller__button right"
          onClick={() =>
            navigateWithTransition(`/Lavori/${getProjectSlug(nextProject)}`)
          }
        >
          <InlineIcon folder="Icons" name="Right-arrow" size="X" />
        </button>
      )}
    </div>
  );
};

export default ProjectController;
