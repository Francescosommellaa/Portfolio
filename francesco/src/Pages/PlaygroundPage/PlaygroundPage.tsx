import React from "react";

// Atoms
import DesktopNav from "../../Components/Atoms/DesktopNav/DesktopNav";

// Scss
import "./PlaygroundPage.scss";

// Organisms
import PlaygroundContents from "../../Components/Organisms/PlaygroundContents/PlaygroundContents";

// Hooks
import { useSize } from "../../Hooks/useSize";

// Layout
import PageWrapper from "../../Components/Layouts/PageWrapper/PageWrapper";
import InlineIcon from "../../Components/Atoms/InlineItems/InlineIcon";

const Playground: React.FC = () => {
  const Size = useSize();
  const isDesktop = Size === "L";

  return (
    <PageWrapper className="playground">
      <div className="title">
        <h1 className={`h1-${Size}`}>
          <span className={`h1-script-${Size}`}>P</span>layground
        </h1>
      </div>

      <div className="text">
        <p className={`paragraph-${Size}`}>
          Benvenuto nel mio parco giochi: <br /> Qui ci trovi schizzi, idee
          random, esperimenti, versioni scartate e tutto quello che non sapevo
          dove mettere… ma che avevo comunque voglia di mostrare.
        </p>

        <InlineIcon folder="Icons" name="DownArrow" size={Size} />
      </div>

      {isDesktop && <DesktopNav hideOnTop={true} />}
      <div className="content">
        <PlaygroundContents />
      </div>
    </PageWrapper>
  );
};

export default Playground;
