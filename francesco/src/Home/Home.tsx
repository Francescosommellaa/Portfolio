import React from "react";

// SCSS
import "./Home.scss";

//interaction
import ScrollNavigator from "../Components/Atoms/Interaction/Scroll/ScrollNavigator";

// Molecules
import Navbar from "../Components/Molecules/Navbar/Navbar";
import Footer from "../Components/Molecules/Footer/Footer";

// Sections
import Hero from "../Components/Sections/Hero/Hero";
import Lavori from "../Components/Sections/Lavori/Lavori";
import Faq from "../Components/Sections/Faq/Faq";
import Parliamo from "../Components/Sections/Parliamo/Parliamo";

const Home: React.FC = () => {
  return (
    <>
      <ScrollNavigator />
      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <section id="lavori">
        <Lavori />
      </section>

      <section id="faq">
        <Faq />
      </section>

      <section id="parliamo">
        <Parliamo />
      </section>

      <footer id="footer">
        <Footer />
      </footer>
    </>
  );
};

export default Home;
