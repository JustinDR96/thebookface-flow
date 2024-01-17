import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pages_Home from "./page/Home/Pages_Home"; 
import Pages_About from "./page/Footer_link/Pages_about";
import Pages_Accessibility from "./page/Footer_link/Pages_Accessibility";
import Pages_help_center from "./page/Footer_link/Pages_help_center";
import Pages_Privacy from "./page/Footer_link/Pages_Privacy";
import Pages_Advertising from "./page/Footer_link/Pages_Advertising";
import Pages_Business from "./page/Footer_link/Pages_Business";
import Pages_login from "./page/Login/Pages_login";



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Pages_login />} />
          <Route path="/home" element={<Pages_Home />} /> 
          <Route path="/about" element={<Pages_About />} />
          <Route path="/accessibility" element={<Pages_Accessibility />} />
          <Route path="/help_center" element={<Pages_help_center />} />
          <Route path="/privacy" element={<Pages_Privacy />} />
          <Route path="/advertising" element={<Pages_Advertising />} />
          <Route path="/business" element={<Pages_Business />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;