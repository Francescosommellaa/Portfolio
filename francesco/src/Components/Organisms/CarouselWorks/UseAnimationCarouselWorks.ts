import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useAnimationCarouselWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const images = containerRef.current?.querySelectorAll<HTMLImageElement>(".project-img img");
    if (!images) return;

    images.forEach((image) => {
      gsap.fromTo(
        image,
        {
          clipPath: "inset(0 0 100% 0)",
          scale: 1.1,
          transformOrigin: "center center",
        },
        {
          clipPath: "inset(0 0 0% 0)",
          scale: 1,
          duration: 2.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: image,
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return containerRef;
};
