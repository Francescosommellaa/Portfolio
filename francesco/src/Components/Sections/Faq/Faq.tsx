import React, { useState } from "react";

// SCSS
import "./Faq.scss";

//DB
import FaqList from "../../DB/FaqList";

// Hooks
import { useSize } from "../../../Hooks/useSize";
import InlineIcon from "../../../Hooks/InlineIcon";

const Faq: React.FC = () => {
  const Size = useSize();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className={`title-h1-${Size}`}>FAQ</h2>
      <div className="faq-section__list">
        {FaqList.map((faq, index) => (
          <div key={index} className="faq-section__item">
            <button
              className={`faq-section__question title-h6-${Size}`}
              onClick={() => toggleFaq(index)}
            >
              {faq.question}
              <InlineIcon
                name={
                  openIndex === index ? "Arrow-min-bottom" : "Arrow-min-top"
                }
                size="M"
                className="faq-section__icon"
              />
            </button>
            <div
              className={`faq-section__answer ${
                openIndex === index ? "faq-section__answer--open" : ""
              }`}
              style={{
                maxHeight: openIndex === index ? "100px" : "0px",
                transition: "max-height 0.3s ease-in-out",
              }}
            >
              <p className={`faq-section__text text-paragraphSmall-${Size}`}>
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
