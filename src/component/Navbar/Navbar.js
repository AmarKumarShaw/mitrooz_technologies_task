import React from 'react'
import "./Navbar.css"


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-content-left">
                <img className="search-bar" src="./images/search_icon.svg" alt="" />
                <input className='navbar-input' type="text" placeholder="Search" />
                <img src="./images/setting.svg" alt="" />
            </div>
            <div className="navbar-content-right">
                <div className="hints">
                <img src="./images/light.svg" alt="" />
                </div>
                <div className="e-learning e-learning-gap">
                    <div className='e-learning-content'>
                        <img src="./images/elearning.svg" alt="" />
                        <p>E-learning</p>
                    </div>
                </div>
                <div className="e-learning">
                    <div className='e-learning-content'>
                        <img src="./images/add.svg" alt="" />
                        <p>Add Course</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
