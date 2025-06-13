import React from "react";
import "./AboutPage.scss";

// Organisms
import AboutIntro from "../../Components/Organisms/AboutContents/AboutIntro/AboutIntro";
import AboutMain from "../../Components/Organisms/AboutContents/AboutMain/AboutMain";
import AboutFooter from "../../Components/Organisms/AboutContents/AboutFooter/AboutFooter";

const AboutPage: React.FC = () => {
  return (
    <main className="aboutPage">
      <AboutIntro />
      <AboutMain />
      <AboutFooter />
    </main>
  );
};

export default AboutPage;
