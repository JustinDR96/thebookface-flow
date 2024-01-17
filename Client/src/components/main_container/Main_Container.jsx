import React from "react";
import Message from "../message/Message";
import Publication from "../publication/Publication";
import Footer from "../footer/Footer";
import Profil_view from "../profil_view/Profil_view";

function Main_Container() {
  return (
    <>
      <div className="main_container">
        <div className="main_publication">
          <Publication />
        </div>
        <div className="message_footer">
          <Message />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Main_Container;
