import React from "react";


function LandingProduct (props) {

    const divStyle = {
        backgroundImage: 'url(' + require('../../images/landing.jpg') + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    };

    return(
    <div style={divStyle}  className="flex justify-center items-center h-[60rem] w-[100vw] shadow-lg">
        <div className="text-black text-center drop-shadow-md">
            <h1 className="md:text-[2.5rem]">FIND YOUR</h1>
            <h1 className="text-[4rem] font-extrabold ">WAVE</h1>
            <strong className="text-[2rem]">Shop WAVE Protein Powder.</strong>
            <p className="text-[2rem]"> Experience specially formulated recipes designed for athletes. </p>
        </div>
        <img src="https://res.cloudinary.com/dwdrq4xo1/image/upload/v1695802299/wave/Global/landing-product_cgskby.png" className="h-[70rem] "/>
    </div>)
}

export default LandingProduct;