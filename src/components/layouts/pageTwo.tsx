import stars from "../../assets/pictures/stars.png";
import cat3 from "../../assets/pictures/cat3.png";
import sparkle from "../../assets/pictures/sparkle.png";
import crown from "../../assets/pictures/crown.png";
import teddie from "../../assets/pictures/teddie.png";
import yellowAlert from "../../assets/pictures/yellowAlert.png";

const PageTwo = () => {
  return (
    <div className="relative min-h-screen w-screen bg1 px-4 py-15 flex flex-col gap-5 overflow-hidden max-w-screen">
      <h1 className="text-2xl font-bold text-white">Best of the best!</h1>

      <div className="grid grid-cols-2 gap-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`relative border-white border-2 backdrop-blur-lg rounded-lg h-32 p-2 ${
              i === 2 ? "col-span-2" : ""
            }`}
          >
            <button className="absolute top-1 right-2 text-white text-sm font-bold">
              Hello
            </button>
          </div>
        ))}
      </div>

      {/* Decorations */}
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
        className="absolute top-[40%] left-2 w-32 h-40 object-contain max-w-[100vw]"
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
