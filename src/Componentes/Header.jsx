import React from "react";
import NavBar from "./NavBar";
const Header = () => {
    return ( 
        <div id='main'>
            <NavBar/>
            <div className="name">
                <h1><span>Lanuch Your App</span> With Confidence And Creativity</h1>
                <p className="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quisquam vel. Totam accusantium modi neque?</p>
                <a href="#" className="cv-btn">Download</a>
            </div>
        </div>
     );
}
 
export default Header;