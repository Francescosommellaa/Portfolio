import React from "react";

// Scss
import "./Playgroundintro.scss";

// Hooks
import { useSize } from "../../../../Hooks/useSize";

// Atoms
import InlineIcon from "../../../Atoms/InlineItems/InlineIcon";

const PlaygroundIntro: React.FC = () => {
  const Size = useSize();

  return (
    <section className="intro-container">
      <div className="title">
        <h1 className={`h1-${Size}`}>
          <span className={`h1-script-${Size}`}>P</span>layground
        </h1>
      </div>

      <div className="intro-container__text">
        <p className={`paragraph-${Size}`}>
          Benvenuto nel mio parco giochi: <br /> Qui ci trovi schizzi, idee
          random, esperimenti, versioni scartate e tutto quello che non sapevo
          dove mettere… ma che avevo comunque voglia di mostrare.
        </p>

        <InlineIcon folder="Icons" name="DownArrow" size={Size} />
      </div>
    </section>
  );
};

export default PlaygroundIntro;
