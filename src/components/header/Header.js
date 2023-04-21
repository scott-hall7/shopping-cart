import React, {  } from "react";
import NavBar from "./NavBar"

const Header = (props) => {

    return (
        <header className={props.display}>
            <p>Smells for Sales</p>
            <NavBar cart={props.cart} showCart={props.showCart} />
        </header>
    )
}

export default Header;