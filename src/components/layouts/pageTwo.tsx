import stars from "../../assets/pictures/stars.png";
import cat3 from "../../assets/pictures/cat3.png";
import sparkle from "../../assets/pictures/sparkle.png";
import crown from "../../assets/pictures/crown.png";
import teddie from "../../assets/pictures/teddie.png";
import yellowAlert from "../../assets/pictures/yellowAlert.png";

import tester from "../../assets/Ana/tester.jpg";
import Beauty from "../../assets/Ana/Beauty.jpg";

import mostCute from "../../assets/Ana/mostCute.jpg";
import redAna from "../../assets/Ana/redAna.jpg";
import cakep from "../../assets/Ana/cakep.jpg";

const PageTwo = () => {
  return (
    <div className="relative min-h-screen w-screen bg1 px-4 py-15 flex flex-col gap-5 overflow-hidden max-w-screen">
      <h1 className="text-2xl font-bold text-white">Best of the best!</h1>

      <div className="grid grid-cols-2 gap-2">
        {[
          { image: tester },
          { image: Beauty },
          { image: cakep },
          { image: mostCute },
          { image: redAna },
        ].map((item, i) => (
          <div
            key={i}
            className={`relative rounded-lg h-32 ${
              i === 2 ? "col-span-2" : ""
            }`}
          >
            <img
              src={item.image}
              className={`w-full h-full  object-cover ${
                i == 2 ? "object-top" : "object-center"
              } rounded-lg `}
              alt=""
            />
          </div>
        ))}
      </div>

      <img
        src={teddie}
        alt="teddie"
        className="absolute -bottom-10 left-4 w-60 h-60 object-contain max-w-[100vw]"
      />
      <img
        src={cat3}
        alt="cat3"
        className="absolute bottom-0 right-2 w-32 h-40 object-contain max-w-[100vw]"
      />
      <img
        src={sparkle}
        alt="sparkle"
        className="absolute top-0 right-2 w-32 h-40 object-contain max-w-[100vw]"
      />
      <img
        src={crown}
        alt="crown"
        className="absolute top-[32%] left-14 w-32 h-40 object-contain max-w-[100vw]"
      />
      <img
        src={yellowAlert}
        alt="yellowAlert"
        className="absolute top-[20%] right-2 w-32 h-40 object-contain max-w-[100vw]"
      />
      <img
        src={stars}
        alt="stars"
        className="absolute top-[60%] right-2 w-24 h-30 object-contain max-w-[100vw]"
      />

      {/* Gradients */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/70 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 to-transparent z-10" />
    </div>
  );
};

export default PageTwo;
