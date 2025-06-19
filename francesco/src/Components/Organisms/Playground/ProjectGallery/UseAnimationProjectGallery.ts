import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface useAnimatioProjectGalleryOptions {
  selector?: string;
}

export const useAnimatioProjectGallery = ({
  selector = ".project-gallery__items",
}: useAnimatioProjectGalleryOptions = {}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(selector) as HTMLElement[];

      items.forEach((item) => {
        gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 95%",
            end: "bottom 40%",
            toggleActions: "play reverse play reverse",

            onEnter: () => item.classList.add("is-visible"),
            onLeaveBack: () => item.classList.remove("is-visible"),

            onLeave: () => {
              const scrollY = window.scrollY;
              const maxScroll = ScrollTrigger.maxScroll(window);
              const isAtBottom = scrollY >= maxScroll - 2; // Tolleranza fine pagina

              if (isAtBottom) return;
              item.classList.remove("is-visible");
            },
          },
        }).fromTo(
          item,
          {
            opacity: 0,
            scale: 0.9,
            y: 40,
            filter: "blur(6px)",
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.5,
            ease: "power3.out",
            overwrite: "auto",
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [selector]);

  return containerRef;
};
