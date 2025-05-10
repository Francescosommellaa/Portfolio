import React, { useState, useRef, useEffect } from "react";
import "./Works.scss";

// DB
import Projects from "../../DB/Projects";

// Hooks
import { useSize } from "../../../Hooks/useSize";

const Works: React.FC = React.memo(() => {
  const size = useSize();
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Funzione per centrare l'elemento attivo
  useEffect(() => {
    if (sliderRef.current) {
      const activeSlide = sliderRef.current.children[
        activeIndex
      ] as HTMLElement;
      const sliderWidth = sliderRef.current.clientWidth;
      const slideWidth = activeSlide.clientWidth;

      // Calcolo offset per il centraggio
      const offset = activeSlide.offsetLeft - sliderWidth / 2 + slideWidth / 2;

      // Garantire che lo scroll non vada oltre i limiti
      sliderRef.current.scrollTo({
        left: offset,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <section className="lavori" id="lavori">
      <div className="lavori__container">
        <div className="lavori__slides" ref={sliderRef}>
          {Projects.map((project, idx) => (
            <img
              key={idx}
              src={`public/Project-img/${project.projectImg}`}
              alt={project.title}
              className={`lavori__slide ${
                idx === activeIndex
                  ? "lavori__slide--active"
                  : "lavori__slide--adjacent"
              }`}
              onClick={() => setActiveIndex(idx)}
            />
          ))}
        </div>

        <div className="lavori__dots">
          {Projects.map((_, idx) => (
            <span
              key={idx}
              className={`lavori__dot ${idx === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(idx)}
            />
          ))}
        </div>

        <div className="lavori__text">
          <h2 className={`title title-h6-${size}`}>
            {Projects[activeIndex].title}
          </h2>
          <p className={`services text-paragraphBig-${size}`}>
            {Projects[activeIndex].services}
          </p>
          <span className={`year text-placeholder-${size}`}>
            {Projects[activeIndex].year}
          </span>
        </div>
      </div>
    </section>
  );
});

export default Works;
