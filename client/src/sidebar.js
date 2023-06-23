import React from 'react'
import './sidebar.css'

const Sidebar = () => {
    return(
        <div className="sideBar">
            <div className="elements">
                <div className="element lab">
                    <button className='element_button lab_button'><i class="fa-solid fa-flask"></i></button>
                </div>
                <div className="element titration">
                    <button className='element_button titration_button'><i class="fa-solid fa-flask-vial"></i></button>
                </div>
                <div className="element organic">
                    <button className='element_button organic_button'><i class="fa-solid fa-c"></i></button>
                </div>
                <div className="element inorganic">
                    <button className='element_button inorganic_button'><span>Na</span></button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;