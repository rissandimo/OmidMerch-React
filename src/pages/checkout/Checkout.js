import React from 'react';
import './checkout.css';

import CheckoutItem from '../../components/checkout-item/Checkout-Item';

import { connect } from 'react-redux';

const CheckoutPage = ({ cartItems }) => (
    <div className="checkout__page">

        
        <div className="checkout__header">
            <div className="header__block">
                <span>Product</span>
            </div>
            <div className="header__block">
                <span>Description</span>
            </div>
            <div className="header__block">
                <span>Price</span>
            </div>
            <div className="header__block">
                <span>Remove</span>
            </div>
        </div>

        {cartItems.map(item => (<CheckoutItem key={item.id} item={item} />))}
        
        <div className="total">Total: $</div>
    </div>

);

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
});


export default connect(mapStateToProps)(CheckoutPage);