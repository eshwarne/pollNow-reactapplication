import React from 'react';
import './navbar.css';
const Navbar=(props)=>{
        return(
            <div id="navbar">
                <a href="#" className="leftNav">Film Polls</a>
                <a href="#" className="leftNav">Political Polls</a>
                <a href="#" className="leftNav">Educational Polls</a>
                <a href="#" className="leftNav">Business polls</a>
                <a href="#" className="rightNav">Contact Us</a>
                <a href="#" className="rightNav">Donate</a>
            </div>
        )
}
export default Navbar;