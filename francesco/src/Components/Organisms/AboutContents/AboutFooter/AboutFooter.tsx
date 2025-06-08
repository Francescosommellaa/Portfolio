import React from "react";

// Scss
import "./AboutFooter.scss";

// Atoms
import InlineIcon from "../../../Atoms/InlineComponents/InlineIcon";
// Hooks
import { useSize } from "../../../../Hooks/useSize";

//Providers
import { useTransition } from "../../../../Providers/TransitionProvider/TransitionProvider";

const AboutFooter: React.FC = () => {
  const Size = useSize();
  const { navigateWithTransition } = useTransition();

  return (
    <section className="footer">
      <InlineIcon folder="Illustrations" name="Illustration-4" size={Size} />
      <div className="footer__CTA">
        <span className={`subTitle-${Size}`}>Non siate timidi.</span>
        <a
          onClick={() => {
            navigateWithTransition("/Contatti");
          }}
        >
          <h2 className={`h1-${Size}`}>
            <span className={`scriptT-${Size}`}>P</span>arliamo
          </h2>
        </a>
      </div>
    </section>
  );
};

export default AboutFooter;
