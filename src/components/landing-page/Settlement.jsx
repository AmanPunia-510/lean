import React from "react";
import Settlement_Bg from '../../assets/images/png/settlement-bg.png'

function Settlement() {
    const Settlement_Img = {
        backgroundImage: `url(${Settlement_Bg})`,
    };
    return (
        <div className="slider-container py" style={Settlement_Img}>
           
        </div>
    );
}

export default Settlement;