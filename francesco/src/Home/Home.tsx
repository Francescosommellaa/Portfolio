import React from "react";

// SCSS
import "./Home.scss";

//interaction
import ScrollNavigator from "../Components/Atoms/Interaction/Scroll/ScrollNavigator";

// Molecules
import Navbar from "../Components/Molecules/Navbar/Navbar";
import Hero from "../Components/Molecules/Hero/Hero";
import Lavori from "../Components/Molecules/Lavori/Lavori";
import Faq from "../Components/Molecules/Faq/Faq";
import Parliamo from "../Components/Molecules/Parliamo/Parliamo";
import Footer from "../Components/Molecules/Footer/Footer";

const Home: React.FC = () => {
  return (
    <>
      <ScrollNavigator />
      <Navbar />

      <section id="hero" className="snap">
        <Hero />
      </section>

      <section id="lavori" className="snap">
        <Lavori />
      </section>

      <section id="faq" className="snap">
        <Faq />
      </section>

      <section id="parliamo" className="snap">
        <Parliamo />
      </section>

      <footer id="footer" className="snap">
        <Footer />
      </footer>
    </>
  );
};

export default Home;
