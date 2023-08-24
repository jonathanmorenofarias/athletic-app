import React from "react";
import '../styles/product.css';

function Product(props) {
    return (
      <div className="product-contain">
        <img className="product-img" src={props.image} alt={`Image of ${props.name}`} />
        <div className="product-info">
            <p>{props.name}</p>
            <p>{props.price}</p>
        </div>
      </div>
    );
  }

export default Product;