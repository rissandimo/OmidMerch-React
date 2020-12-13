import React from 'react';
import './checkout.css';

// Components
import CheckoutItem from '../../components/checkout-item/Checkout-Item';
import StripeCheckoutButton from '../../components/stripe-button/stripeButton';

// Redux
import { connect } from 'react-redux';
import { getCartTotal } from '../../redux/cart/cart-selector';

const CheckoutPage = ({ cartItems, cartTotal }) => (
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

        {cartItems.map(cartItem => (<CheckoutItem key={cartItem.id} cartItem={cartItem} />))}

        <div className="total">Total: ${cartTotal}</div>
        <div className="test-warning">
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242  - Exp 01/2022 - CVV: 123
        </div>
        <StripeCheckoutButton price={cartTotal} className="stripe__button" />

    </div>

);

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems,
    cartTotal: getCartTotal(state)
});


export default connect(mapStateToProps)(CheckoutPage);