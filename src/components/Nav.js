import React from "react";
import '../styles/nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/RLogo.png'
function Nav() {
    return (
      <nav className="nav-contain">
        <div className="navigate">
          <FontAwesomeIcon className="hamburger" icon={faBars} />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <div className="brand">
          <img className="brand-logo" src={logo} alt="R Athletics Logo" />
          <a className="brand-name" href="">ATHLETICS</a>
        </div>
        <div className="purchase">
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </nav>
    );
  }

export default Nav;