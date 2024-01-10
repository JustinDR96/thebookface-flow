import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer-line">
        <Link to="/about">About</Link>
        <Link to="/accessibility">Accessibility</Link>
        <Link >Help Center</Link>
        <Link >Privacy and Terms</Link>
        <Link >Advertising</Link>
        <Link >Business Services</Link>
      </div>
    </>
  );
}

export default Footer;
