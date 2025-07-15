import flower from "../../assets/pictures/flower.png";
import flower2 from "../../assets/pictures/flower2.png";
import flower3 from "../../assets/pictures/flower3.png";
import letter from "../../assets/pictures/letter.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(SplitText, ScrollTrigger);

const EndingPage = () => {
  useGSAP(() => {
    const split = new SplitText(".text", {
      type: "chars",
    });

    gsap.fromTo(
      split.chars,
      {
        x: 40,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".ending-page-root",
          start: "right 70%",
          end: "right 40%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.to("#rose", {
      duration: 2,
      yoyo: true,
      ease: "steps(5)",
      rotate: 10,
      repeat: -1,
    });

    gsap.to("#rose2", {
      duration: 4,
      yoyo: true,
      ease: "steps(5)",
      rotate: -5,
      repeat: -1,
    });

    gsap.fromTo(
      "#letter",
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".ending-page-root",
          start: "right 70%",
          end: "right 40%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <>
      <div className="relative h-screen w-screen landing overflow-y-hidden ending-page-root">
        <div
          className="w-fit h-fit absolute -right-8 top-[55%] justify-center flex items-center"
          id="rose2"
        >
          <img
            src={flower2}
            className="object-cover object-center w-40 h-40 transform scale-x-[-1]"
          />
        </div>
        <div className="w-fit h-fit absolute -left-8 top-[75%] justify-center flex items-center">
          <img src={flower2} className="object-cover object-center w-40 h-40" />
        </div>
        <div className="w-fit h-fit absolute -left-5 top-[70%] justify-center flex items-center">
          <img src={flower2} className="object-cover object-center w-40 h-40" />
        </div>
        <div
          className="w-fit h-fit absolute -left-5 top-[50%] justify-center flex items-center"
          id="rose"
        >
          <img src={flower} className="object-cover object-center w-20 h-20" />
        </div>
        <div className="w-fit h-fit absolute -right-6 bottom-5 - rotate-12 justify-center flex items-center">
          <img
            src={flower3}
            className="object-cover object-center w-25 h-25 transform scale-x-[-1]"
          />
        </div>
        <div className="w-fit h-fit absolute -right-5 bottom-10 -rotate-12 justify-center flex items-center">
          <img
            src={flower3}
            className="object-cover object-center w-25 h-25 transform scale-x-[-1]"
          />
        </div>

        <div className="h-full w-full flex flex-col justify-center items-center gap-5">
          <div className="h-1/2 w-full p-5 text-white flex flex-col gap-5">
            <h1 className="text text-2xl w-3/4 font-semibold">
              So you've finish it? <span>Good job!!</span>
            </h1>
            <p className="text text-gray-400">Here, I got a message for you</p>
          </div>
          <div
            className="w-full h-full right-0 mb-20 justify-center flex items-start"
            id="letter"
          >
            <img
              src={letter}
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/downloads/message.txt";
                link.download = "Message from someone you love.txt";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="object-cover object-center w-70 h-70"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EndingPage;
