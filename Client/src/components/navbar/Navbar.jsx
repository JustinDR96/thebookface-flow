import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ onLinkClick }) {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <Link to="/">
          <img src="/image/user_image.jpg" alt="" />
        </Link>
      </div>

      <div className="navbar-links">
        <button onClick={() => onLinkClick("publication")}>
          <img src="/icon/home_icon.svg" alt="" />
        </button>
        <button to="/">
          <img src="/icon/notif_logo.svg" alt="" />
        </button>
        <button to="/">
          <img src="/icon/setting_logo.svg" alt="" />
        </button>
      </div>

      <div className="navbar-message">
        <button onClick={() => onLinkClick("message")}>
          <img src="/icon/send_logo_white.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
