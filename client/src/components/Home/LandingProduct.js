import React from "react";
import { Navigate } from 'react-router-dom';

function LandingProduct (props) {

    const divStyle = {
        backgroundImage: 'url(' + require('../../images/landing.png') + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    };

    return(
    <div style={divStyle} onClick={() => window.open("/items/6519ef36d106b7199b2ba054", "_self")} className="cursor-pointer 2xl:h-[50rem] xl:h-[40rem] lg:h-[28rem] md:h-[20rem] h-[10rem] w-[100vw] shadow-lg"><a href="/supplements"></a></div>)
}

export default LandingProduct;