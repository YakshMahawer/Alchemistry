import React from "react";
import Comp from './comp_1.png'

const CompoundImg = () => {
    return(
        <div className="comp_img_main">
            <p>Identify Given Compound By Performing Following Tests</p>
            <div className="comp_img">
                <img src={Comp} alt="" />
            </div>
        </div>
    )
}

export default CompoundImg;