import React from "react";


function Newsletter() {
    return (
      <div className="flex flex-col justify-center items-center gap-[1rem] my-[2rem]">
        <p className="text-center">Subscribe to get the latest news on our products!</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-[.5rem]">
            <input className="w-[90vw] md:w-[30rem] h-[2rem] border-2 p-[.5rem] rounded-lg" type="text" placeholder="Email"/>
            <button className="w-[90vw] md:w-[20rem] h-[2rem] bg-[red] text-white rounded-lg">Subscribe</button>
        </div>
      </div>
    );
  }

export default Newsletter;