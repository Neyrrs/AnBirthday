import React from "react";
import dummy from "../../assets/pictures/dumm.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(SplitText, ScrollTrigger);

const MainHero = () => {
  useGSAP(() => {
    const split = new SplitText(".title", { type: "chars" });

    gsap.fromTo(
      split.chars,
      {
        y: 5,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "bounce.inOut",
        duration: 0.2,
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".title",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".image-Container",
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".image-Container",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="w-screen min-h-screen bg-white gap-10 flex flex-col px-5 py-2">
      <div className="flex flex-col gap-2 ">
        <h1 className="title text-xl font-bold text-left ">
          Look at this pretty and cute girl
        </h1>
        <p className="title text-sm text-gray-600 w-2/3">
          The beauty of you will never last while you got those cuteness &
          prettyness
        </p>
      </div>

      <div className="grid grid-cols-2 grid-rows-3 gap-2 w-fit">
        <img
          src={dummy}
          alt="1"
          className="image-Container col-start-1 row-start-1 w-full h-full object-cover rounded-md shadow-lg"
        />
        <img
          src={dummy}
          alt="2"
          className="image-Container col-start-1 row-start-2  h-full w-full object-cover rounded-md shadow-lg"
        />
        <img
          src={dummy}
          alt="3"
          className="image-Container col-start-2 row-start-1 row-span-2 w-full h-full object-cover rounded-md shadow-lg"
        />
        <img
          src={dummy}
          alt="4"
          className="image-Container col-start-1 col-span-3 row-start-3 h-40 w-full object-cover rounded-md shadow-lg"
        />
      </div>
      <div className="pointer-events-none absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/70 to-transparent z-10" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/70 to-transparent z-10" />
    </div>
  );
};

export default MainHero;
