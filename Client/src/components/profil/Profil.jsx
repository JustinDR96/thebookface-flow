import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Publication from "../publication/Publication";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
export default function Profil() {
  const [modalOpen, setModalOpen] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const myToken = localStorage.getItem("token");
    const decodedToken = jwtDecode(myToken);
    setUsername(decodedToken.nameid);
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const [isImageClicked, setIsImageClicked] = useState(false);

  const handleImageClick = () => {
    setIsImageClicked(!isImageClicked);
  };
  return (
    <div className={`page-profil ${isImageClicked ? "wide" : ""}`}>
      <img src="/image/logo_flow_3.png" alt="" className="logo-flow" />
      <img
        className="img-profil"
        src="https://placekitten.com/80/80?image"
        alt=""
        onClick={handleImageClick}
      />
      <h1>{username}</h1>
      {isImageClicked && (
        <button className="edit-profil">
          Add Friend
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z" />
          </svg>
        </button>
      )}
      <div className="post-follower-following">
        <div className="info-group">
          <p className="info-label">Post</p>
          <p className="info-value">23</p>
        </div>
        <div className="info-group">
          <p className="info-label">Friends</p>
          <p className="info-value">242</p>
        </div>
      </div>
      <div className="info-bar" />
      {isImageClicked ? (
        <Publication /> // Remplacez par le composant Publication lorsque l'image est cliquée
      ) : (
        <div className="notif-profil">
          <a href="#" className="logo-link">
            <Link to="/home" className="nav-link">
              <h1 className="logo-text">
                <img
                  src="/icon/home_icon.svg"
                  alt="home Logo"
                  className="home_logo"
                />
                <span className="logo_title">Home</span>
              </h1>
            </Link>
          </a>

          <a href="#" className="logo-link">
            <h1 className="logo-text">
              <img
                src="/icon/notif_logo.svg"
                alt="setting Logo"
                className="notif_logo"
              />
              Notification
            </h1>
          </a>
          <a href="#" className="logo-link">
            <h1 className="logo-text">
              <img
                src="/icon/bubble_logo.svg"
                alt="bubble Logo"
                className="message_logo"
              />
              Message
            </h1>
          </a>
          <a href="#" className="logo-link" onClick={openModal}>
            <h1 className="logo-text">
              <img
                src="/icon/setting_logo.svg"
                alt="setting Logo"
                className="setting_logo"
              />
              Parametre
            </h1>
          </a>
        </div>
      )}
      {modalOpen && (
        <div className="setting-modal">
          <div className="button-modal">
            <h2>Paramètres</h2>
            <span className="close-icon" onClick={closeModal}>
              &#215;{" "}
              {/* Caractère de multiplication qui ressemble à une croix (×) */}
            </span>
            <div>
              <button
                className="disconnect-btn"
                onClick={() => {
                  console.log("Se déconnecter");
                  localStorage.removeItem("token");
                  navigate("/");
                }}
              >
                Se déconnecter
              </button>
            </div>
            <div>
              <button
                className="create-account-btn"
                onClick={() => {
                  console.log("Créer un nouveau compte");
                  navigate("/?showModal=true");
                }}
              >
                Créer un nouveau compte
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
