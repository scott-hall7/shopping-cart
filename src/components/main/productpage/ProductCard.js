import React from "react";

const ProductCard = (props) => {
    return (
        <div className="product-card">
            <img src={props.product.img} alt="grass" />
            <p>{props.product.name}</p>
            <p>{props.product.cost}</p>
            <button type="submit" className="add-to-cart-button">Add To Cart</button>
        </div>
    )
}

export default ProductCard;