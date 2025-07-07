import React from "react";
import HorizontalScrollSection from "./components/layouts/horizontalScroll";
import LastPage from "./components/layouts/lastPage";

const App = () => {
  return (
    <div className="min-h-screen w-screen">
      {/* Section awal */}
      <div className="h-screen w-screen bg-white text-black flex justify-center items-center p-5">
        <div className="w-full h-full gap-2  justify-center flex">
          <div className="w-2/3 h-30 bg-red-500 rounded-md"></div>
          <div className="w-1/3 h-30 bg-blue-500 rounded-md"></div>
        </div>
      </div>
      <HorizontalScrollSection />

      <LastPage />
    </div>
  );
};

export default App;
