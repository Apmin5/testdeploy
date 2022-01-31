import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import { FaReact } from "react-icons/fa";
import { RiCloseLine, RiMenu4Line } from "react-icons/ri";
import "./Navbar.css";
import Button from '../Button';

const Navbar = () => {
    const [clicked , setClicked] = useState(false);
    const clickHandler = () => {
        setClicked(!clicked);
    }
    
    return ( 
        <nav className="NavbarItems">
            <h1 className="navbarLogo">React
                <FaReact className="fareact" />
            </h1>
            <div className="menuIcon" onClick={clickHandler}>
                {!clicked ? <RiMenu4Line /> : <RiCloseLine /> }   
            </div>
            <ul className={`navMenu ${clicked ? "active" : ""}`}>
                {MenuItems.map((item,index)=>{
                    return(
                        <li key={index}>
                            <a className={item.cName} href={item.url}>{item.title}</a>
                        </li>
                    )
                })}
            </ul>
            <Button>Sign Up</Button>
        </nav>
     );
}
 
export default Navbar;