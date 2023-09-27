import React from "react";
import Newsletter from "./Newsletter";
import {CiInstagram, CiTwitter, CiFacebook} from "react-icons/ci"

function Footer() {
    return (
      <footer className="flex flex-col justify-evenly items-center h-[20rem] w-[100vw] border-t-2 bg-black text-white gap-[1.25rem] py-[2rem]">
        <div className="flex flex-col gap-5 md:grid md:grid-cols-3 w-[100vw] order-0">
          <Newsletter />
          <div className="flex items-center justify-center">
            <a href="/"><img src="https://res.cloudinary.com/dwdrq4xo1/image/upload/v1695802299/wave/Global/logo-footer_bwcwv1.png" alt="R Athletics" className="h-[3rem] lg:h-[4rem]" /></a>
          </div >
          <div className="flex items-center justify-center text-[2rem] lg:text-[3rem] gap-[2rem]">
            <CiInstagram className="hover:scale-[110%] hover:cursor-pointer duration-300"/>
            <CiTwitter className="hover:scale-[110%] hover:cursor-pointer duration-300"/>
            <CiFacebook className="hover:scale-[110%] hover:cursor-pointer duration-300"/>
          </div>
        </div>
        <hr className="hr-foot"/>
        <p className="text-[.75rem]">Copyright © 2023 - All Rights Reserved</p>
      </footer>
    );
  }

export default Footer;