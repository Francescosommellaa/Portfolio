import React, { useState } from "react";

// SCSS
import "./Faq.scss";

// Atoms
import InlineIcon from "../../Atoms/InlineIcon/InlineIcon";

//DB
import FaqList from "../../DB/FaqList";

// Hooks
import { useSize } from "../../../Hooks/useSize";

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
                folder="Icon"
                name={openIndex === index ? "arrow-min-down" : "arrow-min-up"}
                size="M"
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
              <p className={`faq-section__text text-smallText-${Size}`}>
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
