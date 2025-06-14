import gsap from "gsap";

export const animateLinkHover = (
  linkRef: HTMLDivElement,
  iconRef: HTMLDivElement
) => {
  const underline = linkRef.querySelector(".underline") as HTMLDivElement;

  const tl = gsap.timeline({ paused: true });

  tl.to(underline, {
    width: "100%",
    duration: 0.4,
    ease: "power2.out",
  }).fromTo(
    iconRef,
    { opacity: 0, scale: 1, y: 10, x: -10 },
    {
      opacity: 1,
      y: 0,
      x: 0,
      duration: 0.35,
      ease: "power2.out",
    },
    "+=0"
  );

  return tl;
};
