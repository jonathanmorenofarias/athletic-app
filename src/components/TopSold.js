import React from "react";
import Product from "./Product.js";


function TopSold(props) {
    const arr = []
    for (var x = 0; x < 5; x++) {
        arr.push(<Product image="//gorillamind.com/cdn/shop/files/Gorilla-Mode-Fruit-Punch.png?v=1693292375&width=1200" name="Preworkout" price="$49.99"/>)
    }

    return (
        <div className="text-center py-[1.25rem] border-y-[1.5px] border-[#cccccc]">
            <h1 className="text-[1.5rem] font-bold">SHOP BEST SELLERS</h1>
            <div className="grid grid-flow-col overflow-x-auto gap-[2rem]">
                {arr}
            </div>
        </div>

    );
  }

export default TopSold;