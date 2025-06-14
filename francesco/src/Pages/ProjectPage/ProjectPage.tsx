import React from "react";
import { useParams } from "react-router-dom";

// Atoms
import DesktopNav from "../../Components/Atoms/DesktopNav/DesktopNav";
import ProjectController from "../../Components/Atoms/ProjectController/ProjectController";
import InlineIcon from "../../Components/Atoms/InlineItems/InlineIcon";
import Link from "../../Components/Atoms/Link/Link";

// Organisms
import ProjectContents from "../../Components/Organisms/ProjectContents/ProjectContents";

// Scss
import "./ProjectPage.scss";

// Hooks
import { useSize } from "../../Hooks/useSize";

// Utils
import { findProjectBySlug } from "../../Utils/projectUtils";

const ProjectPage: React.FC = () => {
  const Size = useSize();
  const isDesktop = Size === "L";
  const { projectId } = useParams<{ projectId: string }>();

  const project = findProjectBySlug(projectId ?? "");

  if (!project) {
    return <div>Progetto non trovato</div>;
  }
  return (
    <section className="progetto">
      <div className="base">
        <div className="title">
          <h1 className={`h1-${Size}`}>
            <span className={`h1-script-${Size}`}>{project.firstLetter}</span>
            {project.name}
          </h1>
        </div>

        {isDesktop && <DesktopNav />}

        <div className="main-info-container">
          <div className="main-info-container__text-element">
            {[
              { label: "Cliente:", value: project.client },
              { label: "Anno:", value: project.year },
              { label: "Categoria:", value: project.category },
            ].map(({ label, value }) => (
              <div key={label} className="text">
                {label && <h5 className={`h5-${Size}`}>{label}</h5>}
                <span className={`paragraph-small-${Size}`}>{value}</span>
              </div>
            ))}
          </div>
          <div className="main-info-container__link-element">
            <Link
              label="Visita Sito"
              link={project.website}
              size={Size}
              openInIframe={true}
            />
          </div>

          <div className="main-info-container__icon-element">
            <InlineIcon folder="Icons" size={Size} name="Down-Arrow" />
          </div>
        </div>
      </div>

      <ProjectContents />
      <ProjectController />
    </section>
  );
};

export default ProjectPage;
