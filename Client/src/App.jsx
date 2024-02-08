import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Pages_Home from "./page/Home/Pages_Home";
import Pages_About from "./page/Footer_link/Pages_about";
import Pages_Accessibility from "./page/Footer_link/Pages_Accessibility";
import Pages_help_center from "./page/Footer_link/Pages_help_center";
import Pages_Privacy from "./page/Footer_link/Pages_Privacy";
import Pages_Advertising from "./page/Footer_link/Pages_Advertising";
import Pages_Business from "./page/Footer_link/Pages_Business";
import Pages_login from "./page/Login/Pages_login";
import useToken from "./hooks/useToken";
import Profil_page from "./page/Profil_page/Profil_page";

function App() {
  const token = localStorage.getItem("token");

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Pages_login />} />
          <Route
            path="/home"
            element={token ? <Pages_Home /> : <Navigate to="/" />}
          />
          <Route
            path="/about"
            element={token ? <Pages_About /> : <Navigate to="/" />}
          />
          <Route
            path="/accessibility"
            element={token ? <Pages_Accessibility /> : <Navigate to="/" />}
          />
          <Route
            path="/help_center"
            element={token ? <Pages_help_center /> : <Navigate to="/" />}
          />
          <Route
            path="/privacy"
            element={token ? <Pages_Privacy /> : <Navigate to="/" />}
          />
          <Route
            path="/advertising"
            element={token ? <Pages_Advertising /> : <Navigate to="/" />}
          />
          <Route
            path="/business"
            element={token ? <Pages_Business /> : <Navigate to="/" />}
          />
          <Route
            path="/profil"
            element={token ? <Profil_page /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
