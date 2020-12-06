import React from 'react';
import { connect } from 'react-redux';

const CheckoutPage = ({ cartItems }) => (
    <div className="checkoutPage">
        {cartItems.map(item => (
            <p>{item.name}</p>
        ))}
    </div>
);

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(CheckoutPage);