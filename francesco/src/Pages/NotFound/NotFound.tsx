import React from "react";

// SCSS
import "./NotFound.scss";

// Hooks
import { useSize } from "../../Hooks/useSize";

const NotFound: React.FC = () => {
  const Size = useSize();

  return <h2 className={`title-h2-${Size}-SB`}>Not Found</h2>;
};

export default NotFound;
