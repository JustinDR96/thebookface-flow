import React, { useState, useEffect, useRef } from "react";


function Publication() {
  useEffect(() => {
    fetch("http://localhost:5025/api/Posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Erreur:", error));
  }, []);

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

  // useEffect(() => {
  //   console.log(posts);
  // }, [posts]);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Vérifiez si le texte est vide
    if (!text.trim()) {
      return;
    }

    let id ;
    try {
      const myToken = localStorage.getItem("token");
      const decodedToken = jwtDecode(myToken);
      id = decodedToken.AppUserId;
    } catch (error) {
      console.error("Erreur lors du décodage du token JWT", error);
      // Vous pouvez rediriger l'utilisateur vers une page d'erreur ou simplement ignorer l'erreur
    }

    const newPost = { TextContent: text, userId: id}; // Remplacez 'content' par 'TextContent' et ajoutez 'userId'

    fetch("http://localhost:5025/api/Posts/newpost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((text) => console.log(text))
      .then((data) => setPosts([data, ...posts]))
      .catch((error) => console.error("Erreur:", error));

    setText("");
  };

  const handleEdit = (index) => {
    const post = posts[index];
    const newText = prompt(
      "Entrez le nouveau texte de la publication",
      post.text
    );
    if (newText) {
      post.text = newText;

      fetch(`http://localhost:5025/api/Posts/${post.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      })
        .then((response) => response.json())
        .then((data) => {
          const newPosts = [...posts];
          newPosts[index] = data;
          setPosts(newPosts);
        })
        .catch((error) => console.error("Erreur:", error));
    }
  };

  const handleDelete = (index) => {
    const post = posts[index];

    fetch(`http://localhost:5025/api/Posts/${post.id}`, {
      method: "DELETE",
    })
      .then(() => {
        const newPosts = [...posts];
        newPosts.splice(index, 1);
        setPosts(newPosts);
      })
      .catch((error) => console.error("Erreur:", error));
  };

  return (
    <>
      <div className="publication">
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

        {posts.map((post, index) => {
          if (!post) {
            return null;
          }

          return (
            <div className="post_container" key={index}>
              <p>{post.textContent}</p>
              {post.imgUrl ? <img src={post.imgUrl} alt="Post" /> : null}
              <div className="post_button">
                <button onClick={() => handleEdit(index)}>
                  <img src="/icon/edit_icon.svg" alt="" />
                </button>
                <button onClick={() => handleDelete(index)}>
                  <img src="/icon/close_icon.svg" alt="" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Publication;
