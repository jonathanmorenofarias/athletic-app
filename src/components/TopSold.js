import React from "react";
import '../styles/topsold.css';
import Product from "./Product.js";

function TopSold(props) {
    const arr = []
    for (var x = 0; x < 20; x++) {
        arr.push(<Product image="https://cdn.imgbin.com/7/5/11/imgbin-dietary-supplement-cellucor-c4-extreme-energy-cellucor-c4-original-pre-workout-explosi-oacute-n-8tzL6eVdWiYfRnDQRkc3MHXCT.jpg" name="Preworkout" price="$49.99" />)
    }

    return (
        <div>
            <h1>Best Sellers</h1>
            <div className="product-list">
                {arr}
            </div>
        </div>
    );
  }

export default TopSold;