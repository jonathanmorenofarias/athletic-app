import React from "react";
import {Link} from "react-router-dom";
import Search from "./Search.js";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineUser} from 'react-icons/ai';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import { BsCart } from 'react-icons/bs';

function Nav() {
    const [burgerOpen, setBurgerOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)

    function toggleBurger () {
      setBurgerOpen(old => !old)
    }

    function toggleSearch () {
      setSearchOpen(old => !old)
    }

    function toggleCart() {
      setCartOpen(old => !old)
    }

    let categories = [
      {
        name: "Supplements",
        data: ["Pre-workout", "Creatine", "Protein Powder"]
      },
      {
        name: "Apparel",
        data: ["Womens", "Mens"]
      },
      {
        name: "Accesories",
        data: ["Bags", "Water Bottles", "Extra"]
      }
    ];

    const allCategories = categories.map(x => {
      return(
        <div>
          <h1 className="text-[1.5rem]">{x.name}</h1>
          {x.data.map(y => {
            return (<p>{y}</p>)
          })}
        </div>
      )
    })

    return (
      <header className="sticky top-0">
        
        <div className="flex lg:justify-around justify-between items-center bg-black h-[4rem] w-[100%] px-[1.5rem] py-[1rem] shadow-md z-[100]">
            <AiOutlineMenu className="text-white lg:hidden" onClick={toggleBurger}/>
            <div className="flex h-[100%] items-center">
            <Link to="/"><img src="https://res.cloudinary.com/dwdrq4xo1/image/upload/v1695802299/wave/Global/logo_ps7vvu.png" alt="Wave Logo" className="h-[3rem]"/> </Link>
            </div>
            <div className="lg:flex hidden text-[.9rem] text-white gap-[1rem]">
              <a href="/supplements" ><h1 className="line-hover">Supplements</h1></a>
              <a href="/apparel"><h1 className="line-hover">Apparel</h1></a>
              <a href="/accessories"><h1 className="line-hover">Accessories</h1></a>
            </div>
            <div className="flex gap-[1rem] text-[1.5rem]">
              
            <HiOutlineMagnifyingGlass onClick={toggleSearch} className="text-white lg:justify-self-start cursor-pointer" />
              <div className={`flex justify-center items-center w-[100vw] h-[15rem] absolute bg-white gap-[1rem] md:gap-[4rem] duration-500 shadow-2xl left-0 ${searchOpen? "top-0": "-top-[20rem]"}`}>
                <Search />
                <AiOutlineClose onClick={toggleSearch} className="cursor-pointer"/>
              </div>
              <Link to="/login"><AiOutlineUser className=" text-white cursor-pointer"/></Link>
            <BsCart onClick={toggleCart} className="text-[1.4rem] text-white cursor-pointer"/>
            </div>
            <div className={`absolute bg-white md:w-[25rem] w-[90vw] h-[100vh] p-[2rem] top-0 shadow-2xl duration-500 ${cartOpen ? "right-0": "md:-right-[25rem] -right-[90vw]"}`}>
              <AiOutlineClose onClick={toggleCart} className=" cursor-pointer float-right"/>
              <h1 className="border-b-2 pb-[1rem] font-bold">CART</h1>
            </div>
        </div>
        <div className={`h-[75vh] w-[100vw] bg-[white] absolute lg:hidden duration-500 left-0 -z-50 ${burgerOpen ? "top-[4rem] shadow-2xl": "-top-[100vh]"}`}>
          <div className={burgerOpen ? `grid grid-flow-row p-[2rem]` : "hidden"}>
              {allCategories}
          </div>
        </div>
      </header>
    );
  }

export default Nav;