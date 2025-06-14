import React from "react";
import "./AboutPage.scss";

// Organisms
import AboutIntro from "../../Components/Organisms/AboutContents/AboutIntro/AboutIntro";
import AboutMain from "../../Components/Organisms/AboutContents/AboutMain/AboutMain";
import AboutFooter from "../../Components/Organisms/AboutContents/AboutFooter/AboutFooter";

// Layout
import PageWrapper from "../../Components/Layouts/PageWrapper/PageWrapper";

const AboutPage: React.FC = () => {
  return (
    <PageWrapper className="aboutPage" fullWidth>
      <AboutIntro />
      <AboutMain />
      <AboutFooter />
    </PageWrapper>
  );
};

export default AboutPage;
