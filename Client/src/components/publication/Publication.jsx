<<<<<<< HEAD
import React, { useState, useEffect, useRef } from "react";

function Publication() {
  const [text, setText] = useState("");
  const [posts, setPosts] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);
  const [gifUrl, setGifUrl] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [gifLoaded, setGifLoaded] = useState(false);
  const fileInput = useRef();
  const gifInput = useRef();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const img = document.createElement("img");
      img.src = reader.result;
      fileInput.current.appendChild(img);
      setImageUrl(reader.result); // store the image URL in the state
      setImageLoaded(true); // set imageLoaded to true when the image is loaded
    };

    reader.readAsDataURL(file);
  };

  const handleGifUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const img = document.createElement("img");
      img.src = reader.result;
      gifInput.current.appendChild(img);
      setGifUrl(reader.result); // store the GIF URL in the state
      setGifLoaded(true); // set gifLoaded to true when the GIF is loaded
    };

    reader.readAsDataURL(file);
  };

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  const handleTextChange = (e) => {
    setText(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the text is empty
    if (!text.trim()) {
      return;
    }

    const newPost = { text, imageUrl, gifUrl };
    setPosts([newPost, ...posts]);
    setText("");
    setImageUrl(null); // reset the image URL after submitting
    setGifUrl(null); // reset the GIF URL after submitting
    setImageLoaded(false); // reset imageLoaded after submitting
    setGifLoaded(false); // reset gifLoaded after submitting
  };

  const handleEdit = (index) => {
    const newPosts = [...posts];
    const post = newPosts[index];
    const newText = prompt(
      "Entrez le nouveau texte de la publication",
      post.text
    );
    if (newText) {
      post.text = newText;
      setPosts(newPosts);
    }
  };

  const handleDelete = (index) => {
    const newPosts = [...posts];
    newPosts.splice(index, 1);
    setPosts(newPosts);
  };

=======
import React from "react";

function Publication() {
>>>>>>> main
  return (
    <>
      <div className="publication">
        <h1>Publication</h1>
<<<<<<< HEAD
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
                placeholder="What's Up ? "
                value={text}
                onChange={handleTextChange}
                maxLength="140"
              />
            </div>

            <div className="publication_add_form_footer">
              <div className="publication_add_form_footer_icon">
                <div className="publication_add_form_footer_icon_image">
                  <label htmlFor="fileInput">
                    <img
                      src="/icon/image_icon.svg"
                      alt=""
                      className={imageLoaded ? "icon-loaded" : ""}
                    />
                  </label>
                  <input
                    type="file"
                    id="fileInput"
                    accept="image/*"
                    style={{ display: "none" }}
                    ref={fileInput}
                    onChange={handleImageUpload}
                  />
                </div>

                <div className="publication_add_form_footer_icon_gif">
                  <label htmlFor="gifInput">
                    <img
                      src="/icon/gif_icon.svg"
                      alt=""
                      className={gifLoaded ? "icon-loaded" : ""}
                    />
                  </label>
                  <input
                    type="file"
                    id="gifInput"
                    accept=".gif"
                    style={{ display: "none" }}
                    ref={gifInput}
                    onChange={handleGifUpload}
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
          <div className="post_container" key={index}>
            <p>{post.text}</p>
            {post.imageUrl && <img src={post.imageUrl} alt="Post" />}
            {post.gifUrl && <img src={post.gifUrl} alt="Gif" />}
            <div className="post_button">
              <button onClick={() => handleEdit(index)}>
                <img src="/icon/edit_icon.svg" alt="" />
              </button>
              <button onClick={() => handleDelete(index)}>
                <img src="/icon/close_icon.svg" alt="" />
              </button>
            </div>
          </div>
        ))}
=======
>>>>>>> main
      </div>
    </>
  );
}

export default Publication;
