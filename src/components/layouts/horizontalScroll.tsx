import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MainHero from "./mainHero";
import EndingPage from "./endingPage";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollSection = () => {
  const sectionRef = useRef();
  const containerRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const section = sectionRef.current;
      const totalSlides = container.children.length;

      const scrollWidth = container.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = scrollWidth - viewportWidth;
      gsap.to(containerRef.current, {
        x: () => `-${scrollDistance}px`,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${scrollDistance * 4}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          snap: {
            snapTo: 1 / (totalSlides - 1),
            duration:1,
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
      className="relative h-screen w-screen overflow-hidden bg-gray-100"
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
