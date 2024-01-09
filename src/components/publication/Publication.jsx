import React from "react";

function Publication() {
  return (
    <>
      <div className="publication">
        <h1>Publication</h1>
        <div className="publication_add">
          <form className="publication_add_form" action="">
            <div className="publication_add_form_header">
              <img
                src="/image/user_image.jpg"
                className="user_profil_image"
                alt=""
              />
              <input
                type="text"
                className="publication_add_form_header_input"
                placeholder="What's up ?"
              />
            </div>

            <div className="publication_add_form_footer">
              <div className="publication_add_form_footer_icon">
                <input type="file" accept="image/*, .gif" />
              </div>
              <button type="submit">Submit</button>{" "}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Publication;
