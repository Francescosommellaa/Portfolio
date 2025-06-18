import { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface AnimateSidebarProps {
  isOpen: boolean;
  sidebarRef: React.RefObject<HTMLDivElement>;
  itemsRef: React.RefObject<HTMLLIElement[]>;
  onCloseComplete?: () => void;
}

export function useAnimateSidebar({
  isOpen,
  sidebarRef,
  itemsRef,
  onCloseComplete,
}: AnimateSidebarProps) {
  const hasMounted = useRef(false);

  useEffect(() => {
    if (!sidebarRef.current) return;

    if (!hasMounted.current) {
      hasMounted.current = true;
      // Impostiamo lo stato "a riposo"
      gsap.set(sidebarRef.current, { y: "-100%" });
      gsap.set(itemsRef.current, { y: 30, opacity: 0 });
      return;
    }

    requestAnimationFrame(() => {
      const items = itemsRef.current;

      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut", duration: 0.6 },
      });

      if (isOpen) {
        gsap.set(sidebarRef.current, { y: "100%" });
        gsap.set(items, { y: 30, opacity: 0 });
        tl.to(sidebarRef.current, { y: "0%" });
        tl.to(items, { y: 0, opacity: 1, stagger: 0.1 });
      } else {
        tl.to(items, { y: 30, opacity: 0, stagger: 0.1 });
        tl.to(sidebarRef.current, { y: "-100%" }, "+=0.1").eventCallback(
          "onComplete",
          () => {
            requestAnimationFrame(() => {
              onCloseComplete?.();
            });
          }
        );
      }
    });
  }, [isOpen, sidebarRef, itemsRef, onCloseComplete]);
}
