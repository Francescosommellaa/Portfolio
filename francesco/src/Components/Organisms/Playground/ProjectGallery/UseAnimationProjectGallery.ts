import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface useAnimatioProjectGalleryOptions {
  selector?: string;
}

export const useAnimatioProjectGallery = ({ selector = ".project-gallery__items" }: useAnimatioProjectGalleryOptions = {}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(selector) as HTMLElement[];

      items.forEach((item) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 96%",
            end: "bottom 40%",
            toggleActions: "play reverse play reverse",
            onEnter: () => item.classList.add("is-visible"),
            onLeaveBack: () => item.classList.remove("is-visible"),
            onLeave: () => {
              if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 80) return;
              item.classList.remove("is-visible");
            },
          },
        });

        tl.fromTo(item, {
          opacity: 0,
          scale: 0.6,
          y: 30,
          filter: "blur(4px)",
        }, {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.6,
          ease: "power2.inOut",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [selector]);

  return containerRef;
};
