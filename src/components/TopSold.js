import React from "react";
import Product from "./Product.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function TopSold(props) {
    const arr = []
    for (var x = 0; x < 10; x++) {
        arr.push(<Product image="//gorillamind.com/cdn/shop/files/Gorilla-Mode-Fruit-Punch.png?v=1693292375&width=1200" name="Preworkout" price="$49.99"/>)
    }

    return (
        <div className="flex flex-col border-t-2 border-b-2 gap-[2rem] py-[2rem]">
            <div className="flex justify-center items-center gap-[2rem]">
                <FontAwesomeIcon icon={faChevronLeft} />
                <h1 className="text-[1.25rem]">Shop Best Sellers</h1>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
            <div className="grid grid-flow-col overflow-x-auto gap-[2rem]">
                {arr}

            </div>
        </div>
    );
  }

export default TopSold;