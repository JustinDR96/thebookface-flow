import React, { useState, useEffect } from "react";
import Main_Container from "../../components/main_container/Main_Container";
import Profil from "../../components/profil/Profil";
import Message from "../../components/message/Message";
import Publication from "../../components/publication/Publication";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Profil_view from "../../components/profil_view/Profil_view";
import useToken from "../../hooks/useToken";


function Pages_Home() {
  const [activeComponent, setActiveComponent] = useState("publication");
  
  const handleLinkClick = (componentName) => {
    setActiveComponent(componentName);
  };
  return (
    <>
      <div className="home_container">
        <div className="desktop-layout">
          <Profil />
          <Main_Container />
        </div>

        <div className="tablet-layout">
          <div className="tablet-layout-navbar">
            <Navbar onLinkClick={handleLinkClick} />
          </div>

          <div className="tablet-layout-main">
            <div
              className={`main-message ${
                activeComponent === "message" ? "show" : "hide"
              }`}
            >
              <Message />
            </div>

            <div
              className={`main-publication ${
                activeComponent === "publication" ? "show" : "hide"
              }`}
            >
              <Publication />
            </div>

            <div
              className={`main-profil-view ${
                activeComponent === "profil_view" ? "show" : "hide"
              }`}
            >
              <Profil_view />
            </div>
          </div>

          <div className="tablet-layout-footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Pages_Home;
