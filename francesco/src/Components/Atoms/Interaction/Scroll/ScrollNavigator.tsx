import React, { useEffect } from "react";
import { scroller } from "react-scroll";

// DB
import PageNav from "../../../DB/PageNav";

const ScrollNavigator: React.FC = () => {
  useEffect(() => {
    const handleArrowScroll = (event: KeyboardEvent) => {
      const sections = PageNav.map((page) => page.section);
      const currentSection = document.querySelector("section.active")?.id;

      if (!currentSection) return;

      const currentIndex = sections.findIndex(
        (section) => section === currentSection
      );

      if (event.key === "ArrowDown" && currentIndex < sections.length - 1) {
        scrollToSection(sections[currentIndex + 1]);
      }

      if (event.key === "ArrowUp" && currentIndex > 0) {
        scrollToSection(sections[currentIndex - 1]);
      }
    };

    const scrollToSection = (section: string) => {
      scroller.scrollTo(section, {
        containerId: "root",
        smooth: true,
        duration: 500,
        offset: -60,
      });
    };

    window.addEventListener("keydown", handleArrowScroll);

    return () => {
      window.removeEventListener("keydown", handleArrowScroll);
    };
  }, []);

  return null;
};

export default ScrollNavigator;
