import React from "react";
import Product from "../components/Home/Product.js";
import { useState, useEffect } from "react";
import { Route, useParams } from "react-router-dom";
import NotFound from "./NotFound.js";


function AllProducts () {
    const params = useParams();
    const productType = params.productType;

    const [products, setProducts] = useState([{}]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/items/category/${productType}`)
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .then(() => setLoading(false));
    }, []);

    if ( productType !== "supplements" && productType !== "apparel" && productType !== "accessories") {
        return(<NotFound/>)
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#919191]"></div>
            </div>
        )
    }
    

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-[.8rem] text-[#AAAAAA]">{products.length} products</h1>
            <div className="flex justify-center flex-wrap gap-[5rem]">
                {products.map(product => (
                    <Product 
                    key={product._id} 
                    _id={product._id}
                    name={product.name}
                    image={product.defaultImage}
                    price={product.price}
                    />
                ))}
            </div>
        </div>

    )
}

export default AllProducts;