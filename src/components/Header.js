import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Menu from './inc/bars-solid.svg'
import Close from './inc/times-solid.svg'
import CartIcon from './inc/shopping-cart-solid.svg'
export class Header extends Component {

    render() {
        return (

            <header>
            <div className = "menu" >
            <img src = { Menu } alt = ""   width = "20" / >

            </div> 
            <div className = "logo" >
                <h1>
                    <Link to="/">Nike</Link>
                </h1>
            </div>
            <nav>
                <ul>
                     <li > < Link to = "/" > Home </Link></li >
                     <li > < Link to = "/" > Product </Link></li >
                     <li > < Link to = "/" > Contact </Link></li >
                     <li > < Link to = "/" > About </Link></li >
                     <li > < Link to = "/" > Login/Register </Link></li >
                     <li className="close">
                         <img src = {Close} alt = ""   width = "20" / >  
                     </li>


                </ul>
                <div className="nav-cart">
                    <span>
                        0
                    </span>
                    <Link to="/cart">
                        <img src = {CartIcon} alt = ""   width = "20" / >
                    </Link>
                </div>
                
                
              </nav>      
            </header >

        );
    }
}

export default Header;