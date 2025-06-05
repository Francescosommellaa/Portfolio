import gsap from "gsap";

export const animateTransition = (
  el: HTMLDivElement,
  onNavigate: () => void
) => {
  // Inizio transizione: da destra verso il centro
  gsap.set(el, { x: "100%", display: "flex" });

  gsap.to(el, {
    x: "0%",
    duration: 1,
    ease: "power2.inOut",
    onComplete: () => {
      onNavigate();

      // Uscita transizione: da centro verso sinistra
      gsap.to(el, {
        x: "-100%",
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set(el, { display: "none", x: "100%" });
        },
      });
    },
  });
};
