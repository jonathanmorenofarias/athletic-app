import React from "react";
import {BsArrowRight} from 'react-icons/bs'

function Newsletter() {
    return (
      <div className="flex flex-col items-center justify-center gap-[.5rem]">
        <p className="text-center">Subscribe for product updates</p>
        <div className="flex justify-between items-center md:w-[15rem] lg:w-[20rem] border-[1px] p-2 hover:scale-[102%] duration-300">
          <input className="md:w-[12rem] lg:w-[23rem] focus:outline-0 bg-transparent " type="text" placeholder="Email"/>
            <BsArrowRight className="text-[1.25rem] hover:cursor-pointer "/>
        </div>
      </div>
    );
  }

export default Newsletter;