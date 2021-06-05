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
            <img src = { Menu }
            alt = ""
            width = "20" / >

            </div> 
            <div className = "logo" >
            <h1>
            <li > < Link to = "/" > Home </Link></li >
            <li > < Link to = "/" > Home </Link></li >
            <li > < Link to = "/" > Home </Link></li >
            <li > < Link to = "/" > Home </Link></li >
            <li > < Link to = "/" > Home </Link></li >
            </h1>


            </div>     
            </header >

        );
    }
}

export default Header;