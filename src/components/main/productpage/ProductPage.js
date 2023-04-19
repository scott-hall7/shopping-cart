import React from "react";
import products from "../../utilities/Products"
import ProductCard from "./ProductCard.js"


const ProductPage = (props) => {
    return (
        <div className="product-page">
            {products.map((product) => {
                return <ProductCard product={product} onClick={props.addToCart} />
            })}
      </div>
    )
}

export default ProductPage;