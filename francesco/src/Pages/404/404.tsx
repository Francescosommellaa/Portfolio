import React from "react";

// Scss
import "./404.scss";

// Atoms
import InlineIcon from "../../Components/Atoms/InlineItems/InlineIcon";

// Hooks
import { useSize } from "../../Hooks/useSize";

const NotFound: React.FC = () => {
  const Size = useSize();

  return (
    <section id="not-found">
      <InlineIcon name="Illustration-3" folder="Illustrations" size={Size} />
    </section>
  );
};

export default NotFound;
