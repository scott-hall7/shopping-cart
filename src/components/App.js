import React, { useState, useEffect } from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Cart from "./main/Cart"
import Footer from "./footer/Footer";
import Products from "./utilities/Products"


const App = () => {
    const [ cart, setCart ] = useState([])

    return (
        <div className="main-container">
            <Header />
            <Main />
            <Cart />
            <Footer />
        </div>
    )
}

export default App;
