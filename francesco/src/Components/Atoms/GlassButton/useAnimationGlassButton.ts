import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useCombinedRefs } from "../../../Hooks/useCombinedRefs";

export const useAnimationGlassButton = (
  externalRef?: React.Ref<HTMLButtonElement>
) => {
  const internalRef = useRef<HTMLButtonElement>(null);
  const combinedRef = useCombinedRefs(
    internalRef,
    ...(externalRef ? [externalRef] : [])
  );

  useLayoutEffect(() => {
    const el = internalRef.current;
    if (!el) return;

    const handleEnter = () => {
      gsap.killTweensOf(el);
      gsap.to(el, {
        scale: 1.1,
        width: "8rem",
        duration: 0.4,
        ease: "back.out(1.7)",
      });
    };

    const handleLeave = () => {
      gsap.killTweensOf(el);
      gsap.to(el, {
        scale: 1,
        width: "4rem",
        duration: 0.3,
        ease: "back.inOut(1.3)",
      });
    };

    const handleClick = () => {
      gsap.killTweensOf(el);
      gsap.fromTo(
        el,
        { scale: 0.95 },
        {
          scale: 1.05,
          duration: 0.15,
          yoyo: true,
          repeat: 1,
          ease: "sine.out",
        }
      );
    };

    const handleTouchStart = () => handleEnter();
    const handleTouchEnd = () => handleLeave();

    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);
    el.addEventListener("click", handleClick);
    el.addEventListener("touchstart", handleTouchStart);
    el.addEventListener("touchend", handleTouchEnd);

    return () => {
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
      el.removeEventListener("click", handleClick);
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return combinedRef;
};
