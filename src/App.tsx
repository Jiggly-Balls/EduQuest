import { HashRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./Utilities/ScrollTop";

import Home from "./pages/Home";
import Map from "./pages/Map/Map";
import OurMission from "./pages/OurMission";
import MainLayout from "./Layouts/MainLayout";
import Stage1 from "./pages/Map/Stages/Stage1";
import Stage2 from "./pages/Map/Stages/Stage2";
import Stage3 from "./pages/Map/Stages/Stage3";
import Stage4 from "./pages/Map/Stages/Stage4";
import Stage5 from "./pages/Map/Stages/Stage5";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/our-mission" element={<OurMission />} />
          <Route path="/map/stage-1" element={<Stage1 />} />
          <Route path="/map/stage-2" element={<Stage2 />} />
          <Route path="/map/stage-3" element={<Stage3 />} />
          <Route path="/map/stage-4" element={<Stage4 />} />
          <Route path="/map/stage-5" element={<Stage5 />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
