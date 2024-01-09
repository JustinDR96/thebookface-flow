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
              <textarea
                className="publication_add_form_header_input"
                placeholder="What's up ?"
              />
            </div>

            <div className="publication_add_form_footer">
              <div className="publication_add_form_footer_icon">
                <div className="publication_add_form_footer_icon_image">
                  <label htmlFor="fileInput">
                    <img src="/icon/image_icon.svg" alt="" />
                  </label>
                  <input
                    type="file"
                    id="fileInput"
                    accept="image/*"
                    style={{ display: "none" }}
                  />
                </div>

                <div className="publication_add_form_footer_icon_gif">
                  <label htmlFor="gifInput">
                    <img src="/icon/gif_icon.svg" alt="" />
                  </label>
                  <input
                    type="file"
                    id="gifInput"
                    accept=".gif"
                    style={{ display: "none" }}
                  />
                </div>
              </div>

              <button type="submit" className="publication_submit_button">
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Publication;
