import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ onLinkClick }) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <Link to="/">
          <img src="/image/user_image.jpg" alt="" />
        </Link>
      </div>

      <div className="navbar-links">
        <button onClick={() => onLinkClick("publication")}>
          <Link to="/home">
          <img src="/icon/home_icon.svg" alt="" />
          </Link>
        </button>
        <button to="/">
          <img src="/icon/notif_logo.svg" alt="" />
        </button>
        <button onClick={openModal}>
          <img src="/icon/setting_logo.svg" alt="" />
        </button>
      </div>

      <div className="navbar-message">
        <button onClick={() => onLinkClick("message")}>
          <img src="/icon/send_logo_white.svg" alt="" />
        </button>
      </div>

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
                onClick={() => console.log("Se déconnecter")}
              >
                Se déconnecter
              </button>
            </div>
            <div>
              <button
                className="create-account-btn"
                onClick={() => console.log("Créer un nouveau compte")}
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
