import React from 'react';
import "./Menu.css";
import { MenuData } from './MenuData';

const Menu = () => {
    return (
        <div className="menu">
            {
                MenuData.map((data,index) => {
                    return(
            <div className="menu-content" key={index}>
                <div className="menu-details">
                <img src={data.logo} alt="" />
                <p className='menu-title'>{data.title}</p>
                </div>
            </div>
                    )
                })
            }
        </div>
    )
}

export default Menu;
