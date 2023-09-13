import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/RLogo.png'
import userEvent from "@testing-library/user-event";

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
        
        <div name="non" className="flex justify-between items-center bg-white h-[4rem] w-[100%] p-[1rem] shadow-md z-[100]">
            <div className="flex gap-[1rem] text-[1.25rem]">
              <FontAwesomeIcon icon={faBars} onClick={toggleBurger} />
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div className="flex h-[100%] items-center">
              <img src={logo} alt="R Athletics Logo" className="h-[100%]"/>
              <a href="">ATHLETICS</a>
            </div>
            <FontAwesomeIcon className="text-[1.25rem]" icon={faCartShopping} />
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