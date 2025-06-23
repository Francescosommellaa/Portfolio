import React from "react";
import { useParams } from "react-router-dom";

// Atoms
import InlineIcon from "../../Components/Atoms/InlineItems/InlineIcon";
import Link from "../../Components/Molecules/Link/Link";

// Organisms
import DesktopNav from "../../Components/Organisms/DesktopNav/DesktopNav";
import ProjectController from "../../Components/Organisms/ProjectController/ProjectController";
import ProjectContents from "../../Components/Organisms/ProjectContents/ProjectContents";

// Scss
import "./ProjectPage.scss";

// Hooks
import { useSize } from "../../Hooks/useSize";
import { formatTitle } from "../../Utils/formatTitle";

// Utils
import { findProjectBySlug } from "../../Utils/projectUtils";

// Layout
import PageWrapper from "../../Components/Layouts/PageWrapper/PageWrapper";

const ProjectPage: React.FC = () => {
  const Size = useSize();
  const isDesktop = Size === "L";
  const { projectId } = useParams<{ projectId: string }>();

  const project = findProjectBySlug(projectId ?? "");

  if (!project) {
    return <div>Progetto non trovato</div>;
  }

  const formattedTitle = formatTitle(project.name, Size);
  return (
    <PageWrapper className="progetto">
      <div className="base">
        {formattedTitle}

        {isDesktop && <DesktopNav />}

        <div className="main-info-container">
          <div className="main-info-container__text-element">
            <div className="info">
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
            <div className="link">
              <Link
                label="Visita Sito"
                link={project.website}
                size={Size}
                openInIframe={true}
              />
            </div>
          </div>

          <div className="main-info-container__icon-element">
            <InlineIcon folder="Icons" size={Size} name="DownArrow" />
          </div>
        </div>
      </div>

      <ProjectContents
        brandShortDescription={project.brandShortDescription}
        bigHorizontalImg={project.bigHorizontalImg}
      />
      <ProjectController />
    </PageWrapper>
  );
};

export default ProjectPage;
