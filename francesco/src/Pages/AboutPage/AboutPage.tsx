import React from "react";

// Scss
import "./AboutPage.scss";

// Hooks
import { useSize } from "../../Hooks/useSize";

// Organisms
import DesktopNav from "../../Components/Organisms/DesktopNav/DesktopNav";
import AboutHero from "../../Components/Organisms/About/AboutHero/AboutHero";
import AboutMain from "../../Components/Organisms/About/AboutMain/AboutMain";
import AboutFooter from "../../Components/Organisms/About/AboutFooter/AboutFooter";

// Layout
import PageWrapper from "../../Components/Layouts/PageWrapper/PageWrapper";

const AboutPage: React.FC = () => {
  const Size = useSize();
  const isDesktop = Size === "L";

  return (
    <PageWrapper className="aboutPage" fullWidth>
      {isDesktop && <DesktopNav hideOnTop={true} />}
      <AboutHero />
      <AboutMain />
      <AboutFooter />
    </PageWrapper>
  );
};

export default AboutPage;
