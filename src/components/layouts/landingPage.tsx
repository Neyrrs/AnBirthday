import dove from "../../assets/pictures/dove.png";
import dove2 from "../../assets/pictures/dove2.png";
import bunchFlower from "../../assets/pictures/bunchFlower.png";
import bunchRoses from "../../assets/pictures/bunchRoses.png";
import cat from "../../assets/pictures/cat.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import manisBanget from "../../assets/Ana/manisbanget.jpg";
import long from "../../assets/Ana/long.png";

const LandingPage = () => {
  useGSAP(() => {
    gsap.set(".animateRight", {
      rotate: -2,
    });

    gsap.to(".animateRight", {
      rotate: 5,
      duration: 1,
      ease: "steps(4)",
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
      scale: 1.1,
    });

    gsap.to(".animateLeft", {
      rotate: -5,
      duration: 1,
      ease: "steps(4)",
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
    });
  }, []);

  return (
    <div className="relative bg3 h-screen text-black w-screen p-3 flex flex-col gap-15 overflow-x-hidden max-w-screen">
      <h1 className="text-lg font-bold">
        Hey, look who{"'"}s turning 18 here?
      </h1>

      <div className="flex justify-between w-full h-fit items-center">
        <p className="w-2/3 text-lg font-semibold">
          Happy birthday for this cute girl that has sweet smile
        </p>
        <img
          src={manisBanget}
          className="w-24 h-24 object-cover object-center rounded-full"
          alt="Profile"
        />
      </div>

      <img
        src={long}
        className="w-auto h-[70vh] z-1 object-cover object-center animateFloat absolute left-1/2 top-1/3 -translate-x-1/2"
        alt="floating object"
      />
      {/* Decorations */}
      <img
        src={dove}
        className="w-20 h-20 object-cover animateRight absolute top-9 right-4 max-w-[100vw]"
        alt="dove"
      />
      <img
        src={bunchFlower}
        className="w-40 h-40 z-20 object-cover animateLeft absolute bottom-5 left-4 max-w-[100vw]"
        alt="bunchFlower"
      />
      <img
        src={bunchRoses}
        className="w-40 h-40 z-20 object-cover animateLeft absolute bottom-3 right-3 max-w-[100vw]"
        alt="roses"
      />
      <img
        src={cat}
        className="w-32 h-32 z-20 object-cover animateRight absolute bottom-3 left-1/2 -translate-x-1/2"
        alt="cat"
      />
      <img
        src={dove2}
        className="w-28 h-28 z-20 object-cover animateLeft absolute top-1/3 left-3 max-w-[100vw]"
        alt="dove2"
      />
      <img
        src={dove2}
        className="w-28 h-28 z-20 object-cover animateRight absolute top-1/3 right-3 max-w-[100vw]"
        alt="dove2"
      />

      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/70 to-transparent z-10" />
    </div>
  );
};

export default LandingPage;
