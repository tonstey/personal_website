import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";

import MenuBar from "./components/MenuBar";

function App() {
  return (
    <>
      <div
        className="relative flex h-full w-full flex-col overflow-x-hidden"
        id="app"
      >
        <MenuBar />

        <HomePage />
        <AboutPage />
        <ResumePage />
        <PortfolioPage />
        <ContactPage />
      </div>
    </>
  );
}

export default App;
