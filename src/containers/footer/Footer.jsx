import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="jsm__footer section__padding">
      <div className="jsm__footer-heading">
        <h2 className="gradient__text">
          Do you want to step in to the future before others
        </h2>
      </div>
      <div className="jsm__footer-button">
        <p>Request Early Access</p>
      </div>
      <div className="jsm__footer-container">
        <div className="jsm__footer-container_logo">
          <img src={logo} alt="Logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="jsm__footer-container_links">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="jsm__footer-container_links">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="jsm__footer-container_links">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="jsm__footer-copyright">
        © 2021 GPT-3. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
