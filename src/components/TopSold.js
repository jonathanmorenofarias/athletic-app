import React from "react";
import Product from "./Product.js";


function TopSold(props) {
    const arr = []
    for (var x = 0; x < 5; x++) {
        arr.push(<Product image="//gorillamind.com/cdn/shop/files/Gorilla-Mode-Fruit-Punch.png?v=1693292375&width=1200" name="Preworkout" price="$49.99"/>)
    }

    return (
            <div className="grid grid-flow-col overflow-x-auto gap-[2rem]">
                {arr}
            </div>

    );
  }

export default TopSold;