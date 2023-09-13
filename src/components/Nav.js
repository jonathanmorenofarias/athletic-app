import React from "react";
import { useState } from "react";
import { AiOutlineMenu} from 'react-icons/ai';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import { BsCart } from 'react-icons/bs';
import logo from '../images/logo.png'

function Nav() {
    const [burgerOpen, setBurgerOpen] = useState(false)

    function toggleBurger () {
      setBurgerOpen(x => !x)
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
        
        <div name="non" className="flex justify-between items-center bg-black h-[4rem] w-[100%] p-[1rem] shadow-md z-[100]">
            <div className="flex gap-[1rem] text-[1.25rem]">
              <AiOutlineMenu className="text-white" onClick={toggleBurger}/>
              <HiOutlineMagnifyingGlass className="text-white" />
            </div>
            <div className="flex h-[100%] items-center">
              <img src={logo} alt="R Athletics Logo" className="h-[3rem]"/>
            </div>
            <BsCart className="text-[1.2rem] text-white"/>
        </div>
        <div name="mobile" className={`h-[75vh] w-[100vw] bg-[white] absolute md:hidden duration-500 -z-50 ${burgerOpen ? "top-[4rem] shadow-2xl": "-top-[100vh]"}`}>
          <div className={burgerOpen ? `flex flex-col p-[2rem]` : "hidden"}>
              {allCategories}
          </div>
        </div>
      </header>
    );
  }

export default Nav;