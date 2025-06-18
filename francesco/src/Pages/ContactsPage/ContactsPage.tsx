import React from "react";

// Scss
import "./ContactsPage.scss";

// Atoms
import InlineIcon from "../../Components/Atoms/InlineItems/InlineIcon";
import Link from "../../Components/Molecules/Link/Link";

// Organisms
import DesktopNav from "../../Components/Organisms/DesktopNav/DesktopNav";

// Hooks
import { useSize } from "../../Hooks/useSize";

// Data
import { contattiData } from "../../Data/Contact";

//Layout
import PageWrapper from "../../Components/Layouts/PageWrapper/PageWrapper";

const Contacts: React.FC = () => {
  const Size = useSize();
  const isDesktop = Size === "L";

  return (
    <PageWrapper className="contatti">
      <div className="title">
        <h1 className={`h1-${Size}`}>
          <span className={`h1-script-${Size}`}>C</span>ontatti
        </h1>
      </div>

      {isDesktop && <DesktopNav />}

      <div className="contatti__main-content">
        <InlineIcon folder="Illustrations" name="Illustration-2" size={Size} />

        <div className="text">
          {contattiData.map((section) => (
            <div key={section.title} className="text-content">
              <h5 className={`h6-${Size}`}>{section.title}</h5>
              <ul>
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <Link label={item.label} link={item.url} size={Size} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contacts;
