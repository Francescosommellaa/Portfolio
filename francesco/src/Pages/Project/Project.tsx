import React from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "../../Components/Data/ProjectsData";

// Scss
import "./Project.scss";

// Atoms
import DesktopNav from "../../Components/Atoms/DesktopNav/DesktopNav";

// Hooks
import { useSize } from "../../Hooks/useSize";

const Playground: React.FC = () => {
  const Size = useSize();
  const isDesktop = Size === "L";
  const { projectId } = useParams<{ projectId: string }>();

  // Cerchiamo il progetto tramite link
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

        {/* NAV */}
        {isDesktop && <DesktopNav />}
      </div>
      <div>other bloch</div>
    </section>
  );
};

export default Playground;
