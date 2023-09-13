import React from "react";
import logo from '../images/logo-footer.png'

function Footer() {
    return (
      <footer className="flex flex-col justify-center items-center h-40 w-[100%] border-t-2 bg-black text-white gap-[1.25rem]">
        <div className="flex justify-center items-center">
          <img src={logo} alt="R Athletics" className="h-[2.5rem]"/>
        </div>
        <p className="text-[.75rem]">Copyright © 2023 - All Rights Reserved</p>
      </footer>
    );
  }

export default Footer;