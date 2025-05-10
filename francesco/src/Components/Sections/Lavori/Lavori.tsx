import React, { useState } from "react";
import { useSize } from "../../../Hooks/useSize";
import "./Lavori.scss";

// DB
import Projects from "../../DB/Projects";

// Hooks
import InlineIcon from "../../../Hooks/InlineIcon";

const Works: React.FC = () => {
  const Size = useSize();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Projects.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="works-section">
      {/* Progetto attuale */}
      <div className={`works-gallery gallery-${Size}`}>
        <button className="prev-btn" onClick={handlePrev}>
          <InlineIcon name="Arrow-min-left" size="M" />
        </button>
        <div className={`work-image image-${Size}`}>
          <img
            src={`../../../../public/Project-img/${Projects[currentIndex].projectImg}`}
            alt={Projects[currentIndex].title}
            className="project-img"
          />
        </div>
        <button className="next-btn" onClick={handleNext}>
          <InlineIcon name="Arrow-min-right" size="M" />
        </button>
      </div>

      {/* Slider con linee */}
      <div className={`works-slider slider-${Size}`}>
        {Projects.map((_, idx) => (
          <div
            key={idx}
            className={`slider-dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(idx)}
          ></div>
        ))}
      </div>

      {/* Informazioni progetto */}
      <div className="work-info">
        <h3 className={`title-h3-${Size} work-title`}>
          {Projects[currentIndex].title}
        </h3>
        <p className={`title-h5-${Size} work-type`}>
          {Projects[currentIndex].services}
        </p>
        <p className={`text-paragraphSmall-${Size} work-year`}>
          {Projects[currentIndex].year}
        </p>
      </div>
    </section>
  );
};

export default Works;
