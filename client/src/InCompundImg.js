import React from "react";
import Comp from './comp_2.png'

const InCompoundImg = () => {
    return(
        <div className="comp_img_main">
            <p>Identify Given Compound By Performing Group Tests</p>
            <div className="comp_img2">
                <img src={Comp} alt="" />
            </div>
        </div>
    )
}

export default InCompoundImg;