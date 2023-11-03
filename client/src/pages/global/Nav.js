import React from "react";
import {Link} from "react-router-dom";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineUser} from 'react-icons/ai';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import { BsCart } from 'react-icons/bs';


function Nav(props) {
    const { cartOpen, setCartOpen, 
      setBurgerOpen,
      setCartTotal, cartTotal, 
      searchOpen, setSearchOpen,
      loggedIn, cartItems
    } = props



    let categories = ["Supplements" ,"Apparel", "Accessories"];

    const allCategories = categories.map(x => {
        <div>
          <a href={`/${x.toLowerCase()}`} className="text-[1.5rem]">{x}</a>
        </div>
    })

    return (
        <div className="flex sticky z-[99] top-0 bg-black lg:justify-around justify-between items-center h-[4rem] w-[100vw] px-[1.5rem] shadow-md">
            <AiOutlineMenu className="text-white lg:hidden cursor-pointer" onClick={() => setBurgerOpen(old => !old)}/>
            <div className="front lg:flex hidden text-[.9rem] text-white gap-[1rem]">
              <a href="/supplements" className="line-hover">Supplements</a>
              <a href="/apparel" className="line-hover">Apparel</a>
              <a href="/accessories" className="line-hover">Accessories</a>
            </div>

            <a href="/"><img src="https://res.cloudinary.com/dwdrq4xo1/image/upload/v1695802299/wave/Global/logo_ps7vvu.png" alt="Wave Logo" className="h-[3rem]"/></a>

            <div className="flex items-center gap-[1rem] text-[1.5rem]">
              <HiOutlineMagnifyingGlass onClick={() => setSearchOpen(true)} className="text-white lg:justify-self-start cursor-pointer" />
              <BsCart onClick={() => setCartOpen(old => !old)} className="relative text-[1.35rem] text-white cursor-pointer"/>
              { loggedIn ? <a href="/account"><AiOutlineUser className=" text-white cursor-pointer"/></a>: <a href="/login"><h1 className="text-white text-[.9rem] self-end">LOGIN</h1></a> }
            </div>
        </div>
    )
  }

export default Nav;