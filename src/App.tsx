import React from "react";
import EndingPage from "./components/layouts/endingPage";
import MainHero from "./components/layouts/mainHero";
import HorizontalScrollSection from "./components/layouts/horizontalScroll";

const App = () => {
  return (
    <div className="min-h-screen w-screen">
      {/* Section awal */}
      <div className="h-screen w-screen bg-white text-black flex justify-center items-center">
        <h1 className="text-4xl font-bold">Last Page</h1>
      </div>
      <HorizontalScrollSection />

      {/* Section terakhir */}
      <div className="h-screen w-screen bg-black text-white flex justify-center items-center">
        <h1 className="text-4xl font-bold">Last Page</h1>
      </div>
    </div>
  );
};

export default App;
