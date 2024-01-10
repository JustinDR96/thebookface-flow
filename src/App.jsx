import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pages_Home from "./page/Home/Pages_Home"; 
import Pages_About from "./page/Footer_link/Pages_about";
import Pages_Accessibility from "./page/Footer_link/Pages_Accessibility";



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Pages_Home />} /> 
          <Route path="/about" element={<Pages_About />} />
          <Route path="/accessibility" element={<Pages_Accessibility />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;