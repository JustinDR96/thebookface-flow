import React from "react";
import Message from "../message/Message";
import Publication from "../publication/Publication";
import Footer from "../footer/Footer";
import SearchBar from "../../components/search_bar/Search_bar";
function Main_Container() {
  return (
    <>
      <div className="main_container">
        <div className="main_publication">
          <SearchBar />
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
