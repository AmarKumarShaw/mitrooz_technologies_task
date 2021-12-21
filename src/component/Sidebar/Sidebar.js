import React from 'react';
import "./Sidebar.css";
import Menu from './Menu/Menu';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <div className="menu-bar">
                <img src="./images/Vector.png" alt="" />
                </div>
                <div className="brand-logo">
                <img src="./images/wyblo_logo_color.svg" alt="" />
                </div>
            </div>
            <Menu/>
        </div>
    )
}

export default Sidebar
