import React from 'react';
import './checkoutItem.css';

const CheckoutItem = ({ item: { name, imageUrl, price} }) => (
    <div className="checkout__item">

        <div className="image__container">
            <img src={imageUrl} alt="product"/>
        </div>

        <span className="name">{name}</span>
        <span className="price">{price}</span>
        <span className="remove__button">&#10005;</span>
    </div>
)

export default CheckoutItem;