import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useAnimationAboutMain = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      if (!container) return;

      // Titoli Skills & Clients 
      gsap.from(container.querySelectorAll(".about-main__skills, .about-main__clients"), {
        y: 60,
        opacity: 0,
        ease: "power2.out",
        duration: 1.4,
        stagger: 0.2,
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Filosofia step
      gsap.from(container.querySelectorAll(".step"), {
        y: 60,
        opacity: 0,
        ease: "power2.out",
        duration: 1.4,
        stagger: 0.25,
        scrollTrigger: {
          trigger: container.querySelector(".about-main__philosophy"),
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Lista clienti - massimo 3 scuri
      const clientItems = Array.from(container.querySelectorAll<HTMLLIElement>(".about-main__client-list li"));
      const darkClass = "client--dark";

      if (clientItems.length === 0) return;

      ScrollTrigger.create({
        trigger: container.querySelector(".about-main__client-list"),
        start: "top 85%",
        end: "bottom 15%",
        scrub: true,
        onUpdate: () => {
          // Trova l'elemento più vicino al centro viewport
          let activeIndex = -1;
          let minDistance = Infinity;

          clientItems.forEach((item, idx) => {
            const rect = item.getBoundingClientRect();
            const distance = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2);

            if (distance < minDistance) {
              minDistance = distance;
              activeIndex = idx;
            }
          });

          // Se siamo fuori dal range, resetto tutto
          const listRect = container.querySelector(".about-main__client-list")?.getBoundingClientRect();
          if (listRect && (listRect.top > window.innerHeight || listRect.bottom < 0)) {
            clientItems.forEach((el) => el.classList.remove(darkClass));
            return;
          }

          // Aggiorna le classi
          clientItems.forEach((el, idx) => {
            if (idx >= activeIndex - 2 && idx <= activeIndex) {
              el.classList.add(darkClass);
            } else {
              el.classList.remove(darkClass);
            }
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return { containerRef };
};
