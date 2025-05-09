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
      <h2 className={`title-h2-${Size}`}>FAQ</h2>
      <div className="faq-list">
        {FaqList.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className={`faq-question title-h5-${Size}`}
              onClick={() => toggleFaq(index)}
            >
              {faq.question}
              <InlineIcon
                name={
                  openIndex === index ? "Arrow-min-bottom" : "Arrow-min-top"
                }
                size="M"
                className="faq-icon"
              />
            </button>
            <div
              className={`faq-answer ${openIndex === index ? "open" : ""}`}
              style={{
                maxHeight: openIndex === index ? "100px" : "0px",
                transition: "max-height 0.3s ease-in-out",
              }}
            >
              <p className={`text-paragraphSmall-${Size}`}>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
