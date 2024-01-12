import React, { Component } from "react";
import Main_Container from "../../components/main_container/Main_Container";
import Profil from "../../components/profil/Profil";

function Pages_Home() {
  return (
    <>
      <div className="home_container">
        <div className="main_profil">
          <Profil />
        </div>
        <Main_Container />
      </div>
    </>
  );
}

export default Pages_Home;