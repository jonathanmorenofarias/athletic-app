import React from "react";

function LandingProduct (props) {
    return(
        <div className="flex">
            <div className="flex flex-col justify-center items-center">
                <h1>{props.name}</h1>
                <h2>{props.calories} - {props.protein}</h2>
                <button className="border-2">ORDER NOW</button>
            </div>
            <img src={props.image} className="h-[15rem] w-[10rem] object-cover" />
        </div>
    )
}

export default LandingProduct;