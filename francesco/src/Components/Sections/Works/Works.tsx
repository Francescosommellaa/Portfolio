import React, { useState, useRef, useEffect, useCallback } from "react";
import "./Works.scss";

// DB
import Projects from "../../DB/Projects";

// Hooks
import { useSize } from "../../../Hooks/useSize";

const Works: React.FC = React.memo(() => {
  const size = useSize();
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Funzione per identificare l'elemento centrato
  const detectCenterSlide = useCallback(() => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const slides = Array.from(slider.children) as HTMLElement[];

      let closestIndex = activeIndex; // Mantieni l'indice corrente come predefinito
      let minDistance = Infinity;

      slides.forEach((slide, index) => {
        const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
        const sliderCenter = slider.scrollLeft + slider.clientWidth / 2;
        const distance = Math.abs(slideCenter - sliderCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      // Aggiorna l'indice solo se cambia, per evitare sfarfallio
      if (closestIndex !== activeIndex) {
        setActiveIndex(closestIndex);
      }
    }
  }, [activeIndex]);

  // Gestire lo scroll manuale
  const handleScroll = useCallback(() => {
    detectCenterSlide();
  }, [detectCenterSlide]);

  // Aggiungere il listener allo scroll
  useEffect(() => {
    const slider = sliderRef.current;

    if (slider) {
      slider.addEventListener("scroll", handleScroll);
      return () => {
        slider.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  // Funzione per centrare l'elemento attivo al click
  const centerOnClick = (index: number) => {
    if (sliderRef.current) {
      const activeSlide = sliderRef.current.children[index] as HTMLElement;
      const sliderWidth = sliderRef.current.clientWidth;
      const slideWidth = activeSlide.clientWidth;

      const offset = activeSlide.offsetLeft - sliderWidth / 2 + slideWidth / 2;

      sliderRef.current.scrollTo({
        left: offset,
        behavior: "smooth",
      });
    }
  };

  // Funzione per gestire il click su progetti o dots
  const handleClick = (index: number) => {
    setActiveIndex(index);
    centerOnClick(index);
  };

  return (
    <section className="works-section" id="works">
      <div className="works-section__container">
        <div className="works-section__slider">
          <div className="works-section__slides" ref={sliderRef}>
            {Projects.map((project, idx) => (
              <img
                key={idx}
                src={`assets/Project-img/${project.projectImg}`}
                alt={project.title}
                className={`works-section__slide ${
                  idx === activeIndex
                    ? "works-section__slide--active"
                    : "works-section__slide--adjacent"
                }`}
                onClick={() => handleClick(idx)}
              />
            ))}
          </div>

          <div className="works-section__dots">
            {Projects.map((_, idx) => (
              <span
                key={idx}
                className={`works-section__dot ${
                  idx === activeIndex ? "works-section__dot--active" : ""
                }`}
                onClick={() => handleClick(idx)}
              />
            ))}
          </div>
        </div>

        <div className="works-section__details">
          <h2 className={`works-section__title title-h6-${size}`}>
            {Projects[activeIndex].title}
          </h2>
          <p className={`works-section__services text-paragraphBig-${size}`}>
            {Projects[activeIndex].services}
          </p>
          <span className={`works-section__year text-placeholder-${size}`}>
            {Projects[activeIndex].year}
          </span>
        </div>
      </div>
    </section>
  );
});

export default Works;
