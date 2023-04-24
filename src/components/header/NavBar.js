import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCart from "../../assets/shopping-cart.png"

const NavBar = (props) => {
    const [ totalQuantity, setTotalQuantity] = useState('');

    useEffect(() => {
        let sum = 0;
        const total = () => {
            for(let i = 0; i < props.cart.length; i++)    {
                sum += props.cart[i].quantity;
            }
            sum === 0 ? setTotalQuantity(''):setTotalQuantity(sum)
        }
        total();
      });
    

    return (
        <nav className="nav-bar">
            <ul>
                <li>
                    <Link to="/shopping-cart">Home</Link>
                </li>
                <li>
                    <Link to="/shopping-cart/products">Products</Link>
                </li>
            </ul>
            <div className="shopping-cart" onClick={props.showCart}>
                <p id="cart-quantity">{totalQuantity}</p>
                <button type="button" id="display-cart"><img src={ShoppingCart} alt="cart button" id="cart-button"/></button>
            </div>
        </nav>
    )
}

export default NavBar;