import React, { useState } from "react";
import logo from "../images/logo.png"
const NavBar = () => {
    
    const [nav,setnav] = useState(false)
    
    const changeBackgound = () =>{
        if (window.scrollY >= 50) {
            setnav(true)
        }
        else{
            setnav(false)
        }
    }
    window.addEventListener('scroll', changeBackgound)
    return ( 
        <nav className={nav ? 'nav active' :'nav'}>
            <a href="#" className="logo">
                <img src={logo} alt=''/>
            </a>
            <input type="checkbox" className="menu-btn" id="menu-btn"/>
            <label htmlFor="" className="menu-icon" for="menu-btn">
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li><a href="#" className="active">Home</a></li>
                <li><a href="#">Factures</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">UI SS</a></li>
                <li><a href="#">Download</a></li>
            </ul>
        </nav>
     );
}
 
export default NavBar;