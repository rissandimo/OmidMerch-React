import React from 'react';
import './cartDropdown.css';

// Components
import CustomButton from '../button/CustomButton';
import CartItem from '../cart-item/CartItem';

// Redux
import { connect } from 'react-redux';

const CartDropdown = ({ cartItems }) => (
    <div className="cartDropdown">
    <h4 className='cartDropdown_text'>Your Items</h4>
    <div className="cartDropdown__items">
        {
            cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} /> ))
        }
    </div>
    <CustomButton >Checkout</CustomButton>
    </div>
);

const mapStateToProps = ({ cart: { cartItems }}) => ({
    cartItems
});



export default connect(mapStateToProps)(CartDropdown);