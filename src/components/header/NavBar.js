import React, {  } from "react";
import ShoppingCart from "../../assets/shopping-cart.png"

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/products">Products</a>
                </li>
                <li>
                    <img src={ShoppingCart} alt="cart button" id="cart-button" />
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;