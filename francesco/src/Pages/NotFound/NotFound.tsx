import React from "react";

// Scss
import "./NotFound.scss";

// Hooks
import { useSize } from "../../Hooks/useSize";
import InlineIcon from "../../Components/Atoms/InlineIcon/InlineIcon";

const NotFound: React.FC = () => {
  const Size = useSize();

  return (
    <section id="not-found">
      <InlineIcon name="Illustration-3" folder="Illustrations" size={Size} />
    </section>
  );
};

export default NotFound;
