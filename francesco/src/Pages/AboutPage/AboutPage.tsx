import React from "react";

// Atoms
import DesktopNav from "../../Components/Atoms/DesktopNav/DesktopNav";

// Scss
import "./AboutPage.scss";

// Hooks
import { useSize } from "../../Hooks/useSize";

// Organisms
import AboutHero from "../../Components/Organisms/AboutContents/AboutHero/AboutHero";
import AboutMain from "../../Components/Organisms/AboutContents/AboutMain/AboutMain";
import AboutFooter from "../../Components/Organisms/AboutContents/AboutFooter/AboutFooter";

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
