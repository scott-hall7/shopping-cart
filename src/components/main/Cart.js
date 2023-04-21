import React, { useState, useEffect } from "react";
import CartProduct from "./CartProduct"

const Cart = (props) => {
    const [ total, setTotal] = useState(0);

    useEffect(() => {
        let sum = 0;
        const total = () => {
            for(let i = 0; i < props.cart.length; i++)    {
                sum += props.cart[i].cost * props.cart[i].quantity;
            }
            setTotal(sum)
        }
        total();
      });

    let display = `cart-sidebar ${props.display}`;
    
    return (
        <div className={display}>
            <div className="cart-header">
                <h3 id ="cart-title">Your Cart</h3>
                <button type="submit" onClick={props.showCart}>X</button>
            </div>
            <div className="cart-products">
                {props.cart.map((item) => {
                    return <CartProduct product={item} addToCard={props.addToCart} removeFromCart={props.removeFromCart} onClick={props.updateCart}/>
                })}
            </div>
            <div className="cart-footer">
                <h3 id ="cart-total">Total: ${total}</h3>
                <button type="submit" id="checkout-button">Checkout Now</button>
            </div>
        </div>
    )
}

export default Cart;
