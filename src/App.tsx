// import { useState } from 'react'
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Courses from "./Pages/Courses/Courses";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
