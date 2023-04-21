import React from "react";
import products from "../../utilities/Products"
import ProductCard from "./ProductCard.js"


const ProductPage = (props) => {
    const display = `product-page ${props.display}`;
    return (
        <div className={display}>
            {products.map((product) => {
                return <ProductCard product={product} onClick={props.addToCart} />
            })}
      </div>
    )
}

export default ProductPage;