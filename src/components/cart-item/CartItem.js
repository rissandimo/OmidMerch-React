import React from 'react';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <div className="cartItem">
        <img src={imageUrl} alt="item"/>
        <div className="cartItem__details">
            <span className="cartItem__details-name">{name}</span>
            <span className="cartItem__details-price">
                {quantity} x ${price}
            </span>
        </div>
    </div>
)

export default CartItem;