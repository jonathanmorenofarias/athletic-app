import React from "react";
import '../styles/footer.css';
import logo from '../images/RLogo.png'

function Footer() {
    return (
      <footer className="foot-contain">
        <img className="footer-logo" src={logo} alt="R Athletics Logo" />
        <a className="footer-name" href="">ATHLETICS</a>
        <p className="copyright-text">Copyright © 2023 - All Rights Reserved</p>
      </footer>
    );
  }

export default Footer;