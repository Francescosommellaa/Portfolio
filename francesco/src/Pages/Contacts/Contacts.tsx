import React from "react";

// Scss
import "./Contacts.scss";

// Atoms
import InlineIcon from "../../Components/Atoms/InlineComponents/InlineIcon";

// Hooks
import { useSize } from "../../Hooks/useSize";

// Data
import { contattiData } from "../../Components/Data/Contact";

const Contacts: React.FC = () => {
  const Size = useSize();

  return (
    <section className="contatti">
      <div className="title">
        <h1 className={`h1-${Size}`}>
          <span className={`h1-script-${Size}`}>C</span>ontatti
        </h1>
      </div>

      <div className="contatti__main-content">
        <InlineIcon folder="Illustrations" name="Illustration-2" size={Size} />

        <div className="text">
          {contattiData.map((section) => (
            <div key={section.title} className="text-content">
              <h5 className={`h6-${Size}`}>{section.title}</h5>
              <ul>
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <a
                      className={`social-${Size}`}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
