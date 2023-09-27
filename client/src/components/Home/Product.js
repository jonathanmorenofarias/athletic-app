import React from "react";
import { Link } from 'react-router-dom';

function Product(props) {


    return (
      <Link to={`/items/${props._id}`}>
        <div className="flex flex-col justify-center items-start h-[26rem] w-[20rem] hover:cursor-pointer" >
            <img src={props.image} alt={`of ${props.name}`} className="h-[20rem]"/>
            <p className="font-bold text-[1rem]">{props.name}</p>
            <p className="text-[1rem]">{props.price}</p>
        </div>
      </Link>
    );
  }

export default Product;