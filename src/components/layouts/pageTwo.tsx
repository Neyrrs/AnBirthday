import stars from "../../assets/pictures/stars.png";
import cat3 from "../../assets/pictures/cat3.png";
import sparkle from "../../assets/pictures/sparkle.png";
import crown from "../../assets/pictures/crown.png";
import teddie from "../../assets/pictures/teddie.png";
import yellowAlert from "../../assets/pictures/yellowAlert.png";

const PageTwo = () => {
  return (
    <div className="relative min-h-screen w-screen bg1 px-4 py-15 flex flex-col gap-5">
      <h1 className="text-2xl font-bold text-white">Best of the best!</h1>
      <div className="grid grid-cols-2 gap-2">
        <div className="relative border-white border-2 backdrop-blur-lg rounded-lg h-32 p-2">
          <button className="absolute top-1 right-2 text-white text-sm font-bold">
            Hello
          </button>
        </div>
        <div className="relative border-white border-2 backdrop-blur-lg rounded-lg h-32 p-2">
          <button className="absolute top-1 right-2 text-white text-sm font-bold">
            Hello
          </button>
        </div>
        <div className="relative border-white border-2 backdrop-blur-lg rounded-lg h-32 p-2 col-span-2">
          <button className="absolute top-1 right-2 text-white text-sm font-bold">
            Hello
          </button>
        </div>
        <div className="relative border-white border-2 backdrop-blur-lg rounded-lg h-32 p-2">
          <button className="absolute top-1 right-2 text-white text-sm font-bold">
            Hello
          </button>
        </div>
        <div className="relative border-white border-2 backdrop-blur-lg rounded-lg h-32 p-2">
          <button className="absolute top-1 right-2 text-white text-sm font-bold">
            Hello
          </button>
        </div>
      </div>
      <div className="absolute -bottom-10">
        <img src={teddie} alt="" className="w-70 h-70"/>
      </div>
      <div className="absolute bottom-0 right-0">
        <img src={cat3} alt="" className="w-fit h-40" />
      </div>
      <div className="absolute top-0 right-0">
        <img src={sparkle} alt="" className="w-fit h-40" />
      </div>
      <div className="absolute top-[40%] -left-10">
        <img src={crown} alt="" className="w-fit h-40" />
      </div>
      <div className="absolute top-[20%] -right-15">
        <img src={yellowAlert} alt="" className="w-fit h-40" />
      </div>
      <div className="absolute top-[60%] -right-5">
        <img src={stars} alt="" className="w-fit h-30" />
      </div>

      <div className="pointer-events-none absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/70 to-transparent z-10" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/70 to-transparent z-10" />
    </div>
  );
};

export default PageTwo;
