import React, { Component } from 'react';
import './navbar.css';
class Navbar extends Component{
    render(){
        return(
            <div id="navbar">
                <a href="#" class="leftNav">Film Polls</a>
                <a href="#" class="leftNav">Political Polls</a>
                <a href="#" class="leftNav">Educational Polls</a>
                <a href="#" class="leftNav">Business polls</a>
                <a href="#" class="rightNav">Contact Us</a>
                <a href="#" class="rightNav">Donate</a>
            </div>
        )
    }
}
export default Navbar;