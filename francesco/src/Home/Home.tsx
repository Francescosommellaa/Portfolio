import React from "react";

// SCSS
import "./Home.scss";

// Molecules
import Navbar from "../Components/Molecules/Navbar/Navbar";
import Footer from "../Components/Molecules/Footer/Footer";

// Sections
import Hero from "../Components/Sections/Hero/Hero";
import Lavori from "../Components/Sections/Works/Works";
import Faq from "../Components/Sections/Faq/Faq";
import Parliamo from "../Components/Sections/Parliamo/Parliamo";
import About from "../Components/Sections/About/About";

const Home: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
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
