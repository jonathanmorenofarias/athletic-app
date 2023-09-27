import React from "react";
import Product from "../components/Home/Product.js";
import { useState, useEffect } from "react";

function Supplements () {
    const [products, setProducts] = useState([{}]);

    useEffect(() => {
        fetch("/api/items/category/supplements")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-[.8rem] text-[#AAAAAA]">{products.length} products</h1>
            <div className="flex justify-center flex-wrap gap-[5rem]">
           {
                products.map((product) => (
                     <Product
                          key={product._id}
                          _id={product._id}
                          name={product.name}
                          image={product.defaultImage}
                          price={product.price}
                          
                     />
                ))
           } 
        </div>
        </div>

    )
}

export default Supplements;