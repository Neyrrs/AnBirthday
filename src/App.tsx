import React, { useState } from "react";
import HorizontalScrollSection from "./components/layouts/horizontalScroll";
import LastPage from "./components/layouts/lastPage";
import car from "./assets/pictures/car.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
// import BirthdayGrid from "./components/BirthdayGrid";

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  const [complete, setComplete] = useState(false);

  const onCarComplete = () => {
    setComplete(true);
    gsap.to("#car", {
      x: "100vh",
      ease: "steps(20)",
      duration: 3,
      delay: 1,
    });
  };

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
      <div className="h-screen"></div>

      {/* <BirthdayGrid /> */}
      <div className="h-screen bg-blue-600"></div>
      <div className="h-screen car-container w-screen bg-white text-black flex flex-col justify-between items-center p-5 relative">
        {/* Konten Tengah (mobil) */}
        <div className="flex items-center justify-end w-full h-full">
          <img
            src={car}
            alt="car"
            id="car"
            className="object-cover h-40 w-fit relative z-10"
            onClick={onCarComplete}
          />
          {complete && (
            <div className="absolute bg-red-500 opacity-100 duration-100 transition-all top-50 w-40 h-10">
              <p>Hello</p>
            </div>
          )}
        </div>

        {/* Shape Merah di Bawah */}
        <div className="w-full h-50 bg-red-500 absolute bottom-20 px-5 left-0 z-0" />
      </div>

      <HorizontalScrollSection />

      <LastPage />
    </div>
  );
};

export default App;
