import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer-line">
        <Link to="/about">About</Link>
        <Link to="/accessibility">Accessibility</Link>
        <Link to="/help_center">Help Center</Link>
        <Link to="/privacy">Privacy and Terms</Link>
        <Link to="/advertising">Advertising</Link>
        <Link to="/business" >Business Services</Link>
      </div>
    </>
  );
}

export default Footer;
