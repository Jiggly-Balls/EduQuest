// import { useState } from 'react'
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Courses from "./Pages/Courses/Courses";
import MainLayout from "./Layouts/MainLayout";
import Python from "./Pages/Courses/Python/Python";
import PythonIntroduction from "./Pages/Courses/Python/PythonIntroduction";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/python" element={<Python />} />
          <Route
            path="/courses/python/introduction"
            element={<PythonIntroduction />}
          />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
