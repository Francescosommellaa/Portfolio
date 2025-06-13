import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "../../Components/Data/ProjectsData";

// Atoms
import DesktopNav from "../../Components/Atoms/DesktopNav/DesktopNav";

// Organisms
import ProjectContents from "../../Components/Organisms/ProjectContents/ProjectContents";

// Hooks
import { useSize } from "../../Hooks/useSize";
import { useModal } from "../../Hooks/useModal";
import IframeModal from "../../Components/Atoms/IframeModal/IframeModal";

// Scss
import "./ProjectPage.scss";

const ProjectPage: React.FC = () => {
  const Size = useSize();
  const isDesktop = Size === "L";
  const { projectId } = useParams<{ projectId: string }>();

  const [iframeUrl, setIframeUrl] = useState("");
  const { isOpen, open, close } = useModal();

  const openIframe = (url: string) => {
    setIframeUrl(url);
    open();
  };

  const project = projectsData
    .flatMap((year) => year.projects)
    .find((p) => p.link.split("/").pop() === projectId);

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
          {[
            { label: "Cliente:", value: project.client },
            { label: "Anno:", value: project.year },
            { label: "Categoria:", value: project.category },
            {
              value: project.website,
              isLink: true,
            },
          ].map(({ label, value, isLink }) => (
            <div key={label} className="main-info-container__element">
              {label && <h5 className={`h5-${Size}`}>{label}</h5>}
              {isLink ? (
                <a
                  className={`sub-title-${Size}`}
                  onClick={() => openIframe(value)}
                >
                  Visita Sito
                </a>
              ) : (
                <span className={`paragraph-small-${Size}`}>{value}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <ProjectContents />

      <IframeModal
        url={iframeUrl}
        isOpen={isOpen}
        onClose={() => {
          close();
        }}
      />
    </section>
  );
};

export default ProjectPage;
