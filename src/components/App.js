import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header/Header";
import Main from "./main/Main";
import Cart from "./main/Cart"
import Footer from "./footer/Footer";


const App = () => {
    const [ cart, setCart ] = useState([]);
    const [ displayCart, setDisplayCart ] = (useState(false))

    const updateCart = (name, changeType) => {
        let updatedCart = [];
        if(cart.find(item => item.name === name)) {
            updatedCart = cart.map((item) => {
                if (item.name === name) {
                    if (changeType === "add") item.quantity += 1;
                    else item.quantity -= 1;
                }
                return item;
            })
            updatedCart = updatedCart.filter(item => item.quantity > 0);
            setCart(updatedCart)
        }
    }

    const addToCart = (e) => {
        const name = e.target.name;
        const value = e.target.value * 1;
        const id = e.target.id;

        if(cart.find(item => item.name === name)) updateCart(name, "add");
        else setCart((prevState) => ([...prevState, {name: name, img: id, cost: value, quantity: 1}]))
    }

    const showCart = () => {
        setDisplayCart(!displayCart);
    }

    return (
        <div className="main-container">
            <BrowserRouter>
                <Header cart={cart} showCart={showCart} display={displayCart ? 'inactive': ''} />
                <Main addToCart={addToCart} display={displayCart ? 'inactive': ''} />
                <Footer />
            </BrowserRouter>
            <Cart cart={cart} showCart={showCart} addToCart={addToCart} updateCart={updateCart} display={displayCart ? 'active': ''} />
        </div>
    )
}

export default App;
