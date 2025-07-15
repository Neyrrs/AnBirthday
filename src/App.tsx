import HorizontalScrollSection from "./components/layouts/horizontalScroll";
import LastPage from "./components/layouts/lastPage";
import LandingPage from "./components/layouts/landingPage";
import PageTwo from "./components/layouts/pageTwo";

const App = () => {
  return (
    <div className="overflow-x-hidden md:hidden block">
      <LandingPage />
      <PageTwo />

      <HorizontalScrollSection />

      <LastPage />
    </div>
  );
};

export default App;
