import React from "react";

const CartProduct = (props) => {
    return (
        <div className="cart-product">
            <img src={props.product.img} alt={props.product.name} />
            <div className="cart-product-totals">
                <p>{props.product.name}</p>
                <div className="cart-product-totals-quantity">
                    <button type="submit" name={props.product.name} onClick={e => props.onClick(e.target.name, "minus")}>-</button>
                    <p>{props.product.quantity}</p>
                    <button type="submit"  name={props.product.name} onClick={e => props.onClick(e.target.name, "add")}>+</button>
                </div>
            </div>
            <p>${props.product.cost * props.product.quantity}</p>
        </div>
    )
}

export default CartProduct;