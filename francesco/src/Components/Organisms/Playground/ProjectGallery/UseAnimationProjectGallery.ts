import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface useAnimationProjectGalleryOptions {
  selector?: string;
}

export const useAnimationProjectGallery = ({
  selector = ".project-gallery__items",
}: useAnimationProjectGalleryOptions = {}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(selector);

      const triggers: ScrollTrigger[] = [];

      items.forEach((item) => {
        const trigger = ScrollTrigger.create({
          trigger: item,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play reverse play reverse",
          onEnter: () => {
            gsap.fromTo(
              item,
              {
                scale: 0.9,
                opacity: 0,
                y: 40,
                filter: "blur(8px)",
              },
              {
                scale: 1,
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.4,
                ease: "power2.out",
                overwrite: "auto",
              }
            );
          },
          onLeaveBack: () => {
            gsap.to(item, {
              opacity: 0,
              scale: 0.8,
              y: 50,
              filter: "blur(8px)",
              duration: 0.3,
              ease: "power2.in",
              overwrite: "auto",
            });
          },
        });

        triggers.push(trigger);
      });

      // ScrollTrigger.refresh() ritardato per evitare race condition
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);

      return () => {
        triggers.forEach((t) => t.kill());
      };
    }, containerRef);

    return () => ctx.revert();
  }, [selector]);

  return containerRef;
};
