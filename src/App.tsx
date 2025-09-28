import { HashRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./Utilities/ScrollTop";

import Home from "./Pages/Home";
import Map from "./Pages/Map/Map";
import OurMission from "./Pages/OurMission";
import MainLayout from "./Layouts/MainLayout";
import Python from "./Pages/Map/Stages/Stage1";
import PythonIntroduction from "./Pages/Map/Stages/Stage2";
import PythonVariables from "./Pages/Map/Stages/Stage3";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/our-mission" element={<OurMission />} />
          <Route path="/courses/python" element={<Python />} />
          <Route
            path="/courses/python/introduction"
            element={<PythonIntroduction />}
          />
          <Route
            path="/courses/python/variables"
            element={<PythonVariables />}
          />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
