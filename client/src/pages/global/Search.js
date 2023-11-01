import React from "react";
import {BsArrowRight} from 'react-icons/bs'
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlineClose } from 'react-icons/ai';
function Search (props) {
    const { searchOpen, setSearchOpen } = props
    const [formData, setFormData] = useState("")

    useEffect(() => {
        console.log(searchOpen)
    }  
    , [searchOpen])

    
    function handleChange (e) {
        setFormData(e.target.value)
    }

    async function handleSubmit (e) {
        e.preventDefault()
        
        if (formData === "") return

        window.location.href = `/query?name=${formData}`
    }

    return(
        <div className={`fixed z-[100] flex justify-center items-center gap-[2rem] bg-white w-[100vw] h-[20vh] shadow-lg duration-300 ${searchOpen ? "top-0": "top-[-20vh]"}`}>
            <form onSubmit={ handleSubmit } className="flex justify-between items-center w-[70vw] md:w-[40rem] border-[1px] md:p-2 p-1 duration-300">
                <input className="w-[95%] md:w-[37rem] focus:outline-0 bg-transparent " 
                type="text" 
                placeholder="Search..."
                value={formData}
                onChange={ handleChange }
                />
                <button><BsArrowRight className="text-[1.5rem] cursor-pointer"/></button>
            </form>
            <AiOutlineClose onClick={ () => setSearchOpen(false) } className="text-[1.25rem] cursor-pointer" />
        </div>
    )
}

export default Search