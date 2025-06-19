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
        ScrollTrigger.create({
          trigger: item,
          start: "top 95%",
          end: "bottom 20%",

          onEnter: () => {
            item.classList.add("is-visible");
            gsap.fromTo(
              item,
              {
                opacity: 0,
                scale: 0.4,
                y: 40,
                filter: "blur(4px)",
              },
              {
                opacity: 1,
                scale: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.6,
                ease: "power2.out",
                overwrite: "auto",
              }
            );
          },

          onLeaveBack: () => {
            item.classList.remove("is-visible");
            gsap.to(item, {
              opacity: 0,
              scale: 0.4,
              y: 40,
              filter: "blur(4px)",
              duration: 0.3,
              ease: "power2.in",
              overwrite: "auto",
            });
          },
        });
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, [selector]);

  return containerRef;
};
