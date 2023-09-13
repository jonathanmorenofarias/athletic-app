import React from "react";


function Product(props) {
  const divStyle = {
    backgroundImage: 'url(' + require('../images/product.jpg') + ')',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  };

    return (
      <div className="flex flex-col justify-center items-start h-[30rem] w-[20rem]">
          <img style={divStyle} src={props.image} className="h-[20rem]"/>
          <p className="font-bold text-[1rem]">{props.name}</p>
          <p className="text-[1rem]">{props.price}</p>
      </div>
    );
  }

export default Product;