import gsap from "gsap";

export const animateTransition = (
  el: HTMLDivElement,
  onNavigate: () => void
) => {
  // Inizio transizione: da destra verso il centro
  gsap.set(el, { y: "100%", display: "flex" });

  gsap.to(el, {
    y: "0%",
    duration: 1,
    ease: "power2.inOut",
    onComplete: () => {
      onNavigate();

      // Uscita transizione: da centro verso sinistra
      gsap.to(el, {
        y: "-100%",
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set(el, { display: "none", y: "100%" });
        },
      });
    },
  });
};
