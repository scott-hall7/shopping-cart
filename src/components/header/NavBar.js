import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCart from "../../assets/shopping-cart.png"

const NavBar = (props) => {
    const [ totalQuantity, setTotalQuantity] = useState(0);

    useEffect(() => {
        let sum = 0;
        const total = () => {
            for(let i = 0; i < props.cart.length; i++)    {
                sum += props.cart[i].quantity;
            }
            setTotalQuantity(sum);
        }
        total();
      });
    

    return (
        <nav className="nav-bar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li onClick={props.showCart}>
                    <p id="cart-total">{totalQuantity}</p>
                    <img src={ShoppingCart} alt="cart button" id="cart-button"/>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;