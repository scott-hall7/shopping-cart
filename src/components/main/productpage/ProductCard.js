import React from "react";

const ProductCard = (props) => {
    return (
        <div className="product-card">
            <img src={props.product.img} alt="grass" />
            <p>{props.product.name}</p>
            <p>${props.product.cost}</p>
            <button type="submit" className="add-to-cart-button" name={props.product.name} value={props.product.cost} onClick={props.onClick}>Add To Cart</button>
        </div>
    )
}

export default ProductCard;