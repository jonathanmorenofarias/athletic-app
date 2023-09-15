import React from "react";
import Newsletter from "./Newsletter";
import logo from '../images/logo-footer.png'
import {CiInstagram, CiTwitter, CiFacebook} from "react-icons/ci"

function Footer() {
    return (
      <footer className="flex flex-col justify-evenly items-center h-[20rem] w-[100vw] border-t-2 bg-black text-white gap-[1.25rem] py-[2rem]">
        <div className="flex flex-col gap-5 md:grid md:grid-cols-3 w-[100vw] order-0">
          <Newsletter />
          <div className="flex items-center justify-center">
            <img src={logo} alt="R Athletics" className="h-[3rem] lg:h-[4rem]" />
          </div >
          <div className="flex items-center justify-center text-[2rem] lg:text-[3rem] gap-[2rem]">
            <CiInstagram className="hover:scale-[110%] hover:cursor-pointer duration-300"/>
            <CiTwitter className="hover:scale-[110%] hover:cursor-pointer duration-300"/>
            <CiFacebook className="hover:scale-[110%] hover:cursor-pointer duration-300"/>
          </div>
        </div>
        <div class="w-[90vw] h-[1px] bg-[#d0d0d0]"></div>
        <p className="text-[.75rem]">Copyright © 2023 - All Rights Reserved</p>
      </footer>
    );
  }

export default Footer;