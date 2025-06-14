import React from "react";

// Scss
import "./PlaygroundPage.scss";

// Hooks
import { useSize } from "../../Hooks/useSize";

// Layout
import PageWrapper from "../../Components/Layouts/PageWrapper/PageWrapper";

const Playground: React.FC = () => {
  const Size = useSize();

  return (
    <PageWrapper className="playground">
      <div className="title">
        <h1 className={`h1-${Size}`}>
          <span className={`scriptT-${Size}`}>P</span>layground
        </h1>
      </div>
    </PageWrapper>
  );
};

export default Playground;
