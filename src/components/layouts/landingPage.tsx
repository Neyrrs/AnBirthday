import React from "react";
import dummyImgae from "../../assets/pictures/dumm.jpg";
import dove from "../../assets/pictures/dove.png";
import rose from "../../assets/pictures/rose.png";
import bunchFlower from "../../assets/pictures/bunchFlower.png";
import bunchRoses from "../../assets/pictures/bunchRoses.png";
import flower2 from "../../assets/pictures/flower2.png";
import flower3 from "../../assets/pictures/flower3.png";
import stars from "../../assets/pictures/stars.png";
import flowerWithButterfly from "../../assets/pictures/flowerWithButterfly.png";
import cat from "../../assets/pictures/cat.png";

const LandingPage = () => {
  return (
    <>
      <div className="relative bg-white h-screen w-screen p-3 flex flex-col gap-15">
        <h1 className="text-lg">Hey, look who{"'"}s turning 18 here?</h1>
        <div className="flex justify-between w-full h-fit items-center">
          <p className="w-2/3 text-lg">
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
            className="w-20 h-20 object-cover object-center"
            alt="dove"
          />
        </div>
        <div className="absolute bottom-5 -left-10 rotate-12">
          <img
            src={bunchFlower}
            className="w-40 h-40 object-cover object-center"
            alt=""
          />
        </div>
        <div className="absolute bottom-5 -right-10 ">
          <img
            src={flower2}
            className="w-40 h-40 object-cover object-center transform scale-x-[-1]"
            alt=""
          />
        </div>
        <div className="absolute bottom-3 -right-5">
          <img
            src={flower2}
            className="w-42 h-42 object-cover object-center transform scale-x-[-1]"
            alt=""
          />
        </div>
        <div className="absolute bottom-3 right-1/2">
          <img
            src={cat}
            className="w-40 h-40 object-cover object-center transform scale-x-[-1]"
            alt=""
          />
        </div>
        <div className="absolute bottom-3 left-1/2">
          <img
            src={bunchRoses}
            className="w-40 h-40 object-cover object-center transform scale-x-[-1]"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
