import React from "react";


function Product(props) {
    return (
        <div className="flex flex-col justify-center items-center h-[90vw] w-[90vw] border-2">
          <img src={props.image} className="h-[75%]"/>
          <p>{props.name}</p>
          <p>{props.price}</p>
        </div>
    );
  }

export default Product;