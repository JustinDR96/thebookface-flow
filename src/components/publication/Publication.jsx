import React, { useState, useEffect, useRef } from "react";

function Publication() {
  const [text, setText] = useState("");
  const [posts, setPosts] = useState([]);
  const fileInput = useRef();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const img = document.createElement("img");
      img.src = reader.result;
      fileInput.current.appendChild(img);
    };

    reader.readAsDataURL(file);
  };

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setPosts([text, ...posts]);
    setText("");
    console.log(posts);
  };

  return (
    <>
      <div className="publication">
        <h1>Publication</h1>
        <div className="publication_add">
          <form className="publication_add_form" onSubmit={handleSubmit}>
            <div className="publication_add_form_header">
              <img
                src="/image/user_image.jpg"
                className="user_profil_image"
                alt=""
              />
              <textarea
                className="publication_add_form_header_input"
                placeholder="What's up ?"
                value={text}
                onChange={(e) => setText(e.target.value)}
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

        {posts.map((post, index) => (
          <div key={index} className="post_container">
            <p>{post}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Publication;
