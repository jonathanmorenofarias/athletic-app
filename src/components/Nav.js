import React from "react";
import '../styles/nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Nav() {
    return (
      <nav className="nav-contain">
        <div className="navigate">
          <FontAwesomeIcon className="hamburger" icon={faBars} />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <div className="brand">
          <img src="" alt="" />
          <a className="brand-name" href="">ATHLETICS</a>
          <img className="brand-logo" src="" alt="" />
        </div>
        <div className="purchase">
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </nav>
    );
  }

export default Nav;