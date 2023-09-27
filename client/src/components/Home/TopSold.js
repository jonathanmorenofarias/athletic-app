import React from "react"
import Product from "./Product.js"
import { useState, useEffect } from "react"

function TopSold(props) {
    const [products, setProducts] = useState([{}])

    useEffect(() => {
        fetch("/api/items/category/topsellers")
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, []);

    const renderTopSellers = products.map((product) => (
            <Product
                key={product._id}
                _id={product._id}
                name={product.name}
                image={product.defaultImage}
                price={product.price}
            />
        ))

    return (
        <div className="text-center py-[1.25rem]">
            <h1 className="text-[1.5rem] font-bold">SHOP BEST SELLERS</h1>
            <div className="flex flex-col items-center text-center border-[#cccccc] overflow-x-auto">
                <div className="grid grid-flow-col overflow-x-auto gap-[2rem]">
                    {renderTopSellers}
                </div>
            </div>
        </div>
    );
  }

export default TopSold;