import React from "react";


function LandingProduct (props) {

    const divStyle = {
        backgroundImage: 'url(' + require('../images/landing.jpg') + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    };

    return(
    <div style={divStyle} className="flex flex-col justify-center items-center  h-[20rem] w-[100vw]">
        <div className="text-white text-center w-[15rem]">
            <h1 className="md:text-[1.5rem]">FIND YOUR</h1>
            <h1 className="text-[2rem]">WAVE</h1>
            <p className="text-[.9rem]">Shop <strong>WAVE Protein Powder.</strong> Experience specially formulated recipes designed for athletes. </p>
        </div>
    </div>)
}

export default LandingProduct;