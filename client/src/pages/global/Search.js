import React from "react";
import {BsArrowRight} from 'react-icons/bs'

function Search () {
    return(
        <div className="flex justify-between items-center w-[80vw] md:w-[40rem] border-[1px] md:p-2 p-1 duration-300">
            <input className="w-[95%] md:w-[37rem] focus:outline-0 bg-transparent " type="text" placeholder="Email"/>
            <BsArrowRight className="text-[1.5rem] hover:cursor-pointer "/>

        </div>
    )
}

export default Search