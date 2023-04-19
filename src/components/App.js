import React, { useState, useEffect } from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Cart from "./main/Cart"
import Footer from "./footer/Footer";


const App = () => {
    const [ cart, setCart ] = useState([]);


    const addToCart = (e) => {
        console.log(e.target)
        //if(cart.find(item => item.name === name)) console.log(true)
        //else setCart((prevState) => ([...prevState, {name: name, cost: cost, quantity: 1}]))
        //console.log(cart)
    }

    return (
        <div className="main-container">
            <Header />
            <Main addToCart={addToCart} />
            <Cart cart={cart} />
            <Footer />
        </div>
    )
}

export default App;
