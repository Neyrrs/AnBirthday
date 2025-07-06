import React from "react";
import dummy from "../../assets/dumm.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Daftarkan plugin
gsap.registerPlugin(SplitText, ScrollTrigger);

const MainHero = () => {
  useGSAP(() => {
    // Animasi teks judul
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

    // Animasi gambar masuk saat discroll
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
    <div className="w-screen min-h-screen flex flex-col justify-center items-center px-5 py-20">
      <h1 className="title text-4xl font-bold text-center mb-10">Welcome to the Gallery</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, idx) => (
          <img
            src={dummy}
            alt={`dummy-${idx}`}
            key={idx}
            className="image-Container w-full h-auto object-cover rounded-md shadow-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default MainHero;
