import React from "react";
import '../styles/topsold.css';
import Product from "./Product.js";

function TopSold(props) {
    const arr = []
    for (var x = 0; x < 8; x++) {
        arr.push(<Product image="//gorillamind.com/cdn/shop/files/Gorilla-Mode-Fruit-Punch.png?v=1693292375&width=1200" name="Preworkout" price="$49.99" />)
    }

    return (
        <div className="all-best">
            <h1 className="best-title">Shop Best Sellers</h1>
            <div className="product-list">
                {arr}
            </div>
        </div>
    );
  }

export default TopSold;