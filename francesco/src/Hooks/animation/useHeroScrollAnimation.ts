// hooks/useHeroScrollAnimation.ts
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useHeroScrollAnimation = ({
  containerRef,
  firstRef,
  lastRef,
  imgRef,
  textRightRef,
  iconsRef,
}: {
  containerRef: React.RefObject<HTMLElement>;
  firstRef: React.RefObject<HTMLElement>;
  lastRef: React.RefObject<HTMLElement>;
  imgRef: React.RefObject<HTMLElement>;
  textRightRef: React.RefObject<HTMLElement>;
  iconsRef: React.RefObject<HTMLElement>;
}) => {
  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=100%',
          scrub: true,
          pin: true,
        },
      });

      // Effetto su nome
      tl.to([firstRef.current, lastRef.current], {
        duration: 1,
        ease: 'power2.out',
      });

      // Immagine che cresce e si sposta al centro
      tl.to(
        imgRef.current,
        {
          height: 480,
          duration: 1,
          ease: 'power2.out',
        },
        '<'
      );

      // Icone che spariscono
      tl.to(
        iconsRef.current,
        {
          opacity: 0,
          y: -50,
          duration: 0.5,
        },
        '<'
      );

      // Testo a destra che entra
      tl.fromTo(
        textRightRef.current,
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power2.out',
        },
        '<'
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);
};
