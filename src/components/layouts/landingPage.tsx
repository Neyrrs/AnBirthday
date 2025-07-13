import dummyImgae from "../../assets/pictures/dumm.jpg";
import dove from "../../assets/pictures/dove.png";
import dove2 from "../../assets/pictures/dove2.png";
import bunchFlower from "../../assets/pictures/bunchFlower.png";
import bunchRoses from "../../assets/pictures/bunchRoses.png";
import cat from "../../assets/pictures/cat.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
    <>
      <div className="relative bg3 h-screen text-black w-screen p-3 flex flex-col gap-15">
        <h1 className="text-lg font-bold">
          Hey, look who{"'"}s turning 18 here?
        </h1>
        <div className="flex justify-between w-full h-fit items-center">
          <p className="w-2/3 text-lg font-semibold">
            Happy birthday for this cute girl that has sweet smile{" "}
          </p>
          <img
            src={dummyImgae}
            className="w-30 h-30 object-cover object-center rounded-full"
            alt=""
          />
        </div>
        <div className="top-9 right-8 absolute">
          <img
            src={dove}
            className="w-20 h-20 object-cover animateRight object-center"
            alt="dove"
          />
        </div>
        <div className="absolute bottom-5 -left-10 rotate-12">
          <img
            src={bunchFlower}
            className="w-40 h-40 object-cover animateLeft object-center"
            alt=""
          />
        </div>
      </div>
      <div className="absolute bottom-3 -right-5">
        <img
          src={bunchRoses}
          className="w-42 h-42 object-cover animateLeft object-center transform"
          alt=""
        />
      </div>
      <div className=" absolute bottom-3 left-1/2">
        <img
          src={cat}
          className="w-40 h-40 object-cover animateRight object-center transform"
          alt=""
        />
      </div>
      <div className="absolute bottom-3 right-1/2">
        <img
          src={bunchRoses}
          className="w-40 h-40 object-cover animateLeft object-center transform"
          alt=""
        />
      </div>
      <div className="absolute top-1/3 right-7 ">
        <img
          src={dove2}
          className="w-30 h-30 object-cover animateRight object-center transform"
          alt=""
        />
      </div>
      <div className="absolute top-1/3 left-10">
        <img
          src={dove2}
          className="w-25 h-25 object-cover animateLeft object-center transform"
          alt=""
        />
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/70 to-transparent z-10" />
    </>
  );
};

export default LandingPage;
