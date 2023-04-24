import React, { } from "react";
import {  Routes, Route } from "react-router-dom";
import HomePage from "./homepage/Homepage";
import ProductPage from "./productpage/ProductPage";


const Main = (props) => {
    return (
        <Routes>
            <Route path="/shopping-cart" element={<HomePage display={props.display}/>} />
            <Route path="/shopping-cart/products" element={<ProductPage addToCart={props.addToCart} display={props.display}/>} />
        </Routes>   
    )
}

export default Main;