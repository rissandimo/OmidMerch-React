import React from 'react';
import './checkoutItem.css';

import { clearItemFromCart } from '../../redux/cart/cart-actions';

import { connect } from 'react-redux';

const CheckoutItem = ({ cartItem, removeItem }) => {
    
    const { name, imageUrl, price} = cartItem;

    return (
    <div className="checkout__item">

        <div className="image__container">
            <img src={imageUrl} alt="product"/>
        </div>

            <span className="name">{name}</span>
            <span className="price">${price}</span>
            <div className="remove__button">
                <span onClick={() => removeItem(cartItem)}>&#10005;</span>
            </div>

    </div>
)}

const mapDispatchToProps = dispatch => ({
    removeItem: itemToRemove => dispatch(clearItemFromCart(itemToRemove))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);