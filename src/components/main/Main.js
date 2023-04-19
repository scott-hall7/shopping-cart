import React, { } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./homepage/Homepage";
import ProductPage from "./productpage/ProductPage";


const Main = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductPage addToCart={props.addToCart} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Main;