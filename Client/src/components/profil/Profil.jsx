import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Profil() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='page-profil'>
      <img className='img-profil' src="https://placekitten.com/80/80?image" alt="" />
      <h1>Flow</h1>
      <p>Position</p>
      <div className="post-follower-following">
        <div className="info-group">
          <p className="info-label">Post</p>
          <p className="info-value">23</p>
        </div>
        <div className="info-group">
          <p className="info-label">Follower</p>
          <p className="info-value">242,424</p>
        </div>
        <div className="info-group">
          <p className="info-label">Following</p>
          <p className="info-value">24,423,424</p>
        </div>
      </div>
      <div className="info-bar"></div>
      <div className="notif-profil">

        <a href="#" className="logo-link">
          <Link to="/home" className="nav-link">
            <h1 className="logo-text">
              <img src="/icon/home_icon.svg" alt="home Logo" className="home_logo" />
              <span className='logo_title' >Home</span>
            </h1>
          </Link>
        </a>

        <a href="#" className="logo-link">
          <h1 className="logo-text">
            <img src="/icon/notif_logo.svg" alt="setting Logo" className="notif_logo" />
            Notification
          </h1>
        </a>
        <a href="#" className="logo-link">
          <h1 className="logo-text">
            <img src="/icon/bubble_logo.svg" alt="bubble Logo" className="message_logo" />
            Message
          </h1>
        </a>
        <a href="#" className="logo-link" onClick={openModal}>
          <h1 className="logo-text">
            <img src="/icon/setting_logo.svg" alt="setting Logo" className="setting_logo" />
            Parametre
          </h1>
        </a>
      </div>
      {modalOpen && (
        <div className="setting-modal">
          <div className="button-modal">
            <h2>Paramètres</h2>
            <span className="close-icon" onClick={closeModal}>
              &#215; {/* Caractère de multiplication qui ressemble à une croix (×) */}
            </span>
            <div>
              <button className="disconnect-btn" onClick={() => console.log('Se déconnecter')}>
                Se déconnecter
              </button>
            </div>
            <div>
              <button className="create-account-btn" onClick={() => console.log('Créer un nouveau compte')}>
                Créer un nouveau compte
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

