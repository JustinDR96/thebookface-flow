import React, { useState } from "react";
import Main_Container from "../../components/main_container/Main_Container";
import Profil from "../../components/profil/Profil";
import Message from "../../components/message/Message";
import Publication from "../../components/publication/Publication";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

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
