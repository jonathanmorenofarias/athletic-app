import React from "react";
import '../styles/product.css';

function Product(props) {
    return (
        <div className="product-contain">
          <img className="product-img" src={props.image} alt={`Image of ${props.name}`} />
              <p>{props.name}</p>
              <p>{props.price}</p>
        </div>
    );
  }

export default Product;