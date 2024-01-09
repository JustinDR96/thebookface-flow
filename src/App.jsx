import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pages_Home from "./page/Home/Pages_Home"; // Changez le nom de l'importation ici

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Ajoutez vos routes ici */}
          <Route path="/" element={<Pages_Home />} /> // Utilisez le bon nom ici
        </Routes>
      </Router>
    </>
  );
}

export default App;
