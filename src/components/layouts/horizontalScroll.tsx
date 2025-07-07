import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MainHero from "./mainHero";
import EndingPage from "./endingPage";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const totalSlides = container?.children.length || 0;

      const scrollWidth = container?.scrollWidth || 0;
      const viewportWidth = window.innerWidth;
      const scrollDistance = scrollWidth - viewportWidth;

      gsap.to(containerRef.current, {
        x: () => `-${scrollDistance}px`,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          snap: {
            snapTo: 1 / (totalSlides - 1),
            duration: 1,
            ease: "power1.inOut",
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-screen overflow-hidden"
    >
      <div
        ref={containerRef}
        className="flex w-max h-full"
        style={{ willChange: "transform" }}
      >
        <div className="h-full w-screen flex-shrink-0">
          <MainHero />
        </div>
        <div className="h-full w-screen flex-shrink-0">
          <EndingPage />
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollSection;
