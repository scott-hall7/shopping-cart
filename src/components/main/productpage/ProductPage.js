import React from "react";
import products from "../../utilities/Products"
import ProductCard from "./ProductCard.js"


const ProductPage = () => {
    return (
        <div className="product-page">
            {products.map((product) => {
                return <ProductCard product={product} />
            })}
      </div>
    )
}

export default ProductPage;