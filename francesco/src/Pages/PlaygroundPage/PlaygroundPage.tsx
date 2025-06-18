import React from "react";

// Atoms
import DesktopNav from "../../Components/Organisms/DesktopNav/DesktopNav";

// Scss
import "./PlaygroundPage.scss";

// Organisms
import PlaygroundContents from "../../Components/Organisms/Playground/ProjectGallery/ProjectGallery";

// Hooks
import { useSize } from "../../Hooks/useSize";

// Layout
import PageWrapper from "../../Components/Layouts/PageWrapper/PageWrapper";
import PlaygroundIntro from "../../Components/Organisms/Playground/PlaygroundIntro/PlaygroundIntro";

const Playground: React.FC = () => {
  const Size = useSize();
  const isDesktop = Size === "L";

  return (
    <PageWrapper className="playground">
      <PlaygroundIntro />

      {isDesktop && <DesktopNav hideOnTop={true} />}
      <div className="content">
        <PlaygroundContents />
      </div>
    </PageWrapper>
  );
};

export default Playground;
