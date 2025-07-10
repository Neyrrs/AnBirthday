import React, { useState } from "react";
import HorizontalScrollSection from "./components/layouts/horizontalScroll";
import LastPage from "./components/layouts/lastPage";
import car from "./assets/pictures/car.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import LandingPage from "./components/layouts/landingPage";
import PageTwo from "./components/layouts/pageTwo";
// import BirthdayGrid from "./components/BirthdayGrid";

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#car",
      {
        x: "-100vh",
      },
      {
        x: 30,
        ease: "steps(20)",
        duration: 5,
        scrollTrigger: {
          trigger: ".car-container",
          start: "top center",
          end: "center center",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  return (
    <div className="min-h-screen w-screen">
      <LandingPage />
      <PageTwo />
      {/* <BirthdayGrid /> */}
      <div className="h-screen bg4 relative car-container bg-[##cadbd8] w-screen text-black flex flex-col justify-between items-center p-5">
        <div className="flex items-center justify-end w-full h-full">
          <img
            src={car}
            alt="car"
            id="car"
            className="object-cover h-40 w-fit relative z-10"
          />
        </div>
        <div className="pointer-events-none absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/70 to-transparent z-10" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/70 to-transparent z-10" />
      </div>

      <HorizontalScrollSection />

      <LastPage />
    </div>
  );
};

export default App;
