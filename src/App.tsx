import { HashRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./Utilities/ScrollTop";

import Home from "./Pages/Home";
import Map from "./Pages/Map/Map";
import OurMission from "./Pages/OurMission";
import MainLayout from "./Layouts/MainLayout";
import Stage1 from "./Pages/Map/Stages/Stage1";
import Stage2 from "./Pages/Map/Stages/Stage2";
import Stage3 from "./Pages/Map/Stages/Stage3";

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
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
