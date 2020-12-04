import React from 'react';
import './cartDropdown.css';

// Components
import CustomButton from '../button/CustomButton';
import CartItem from '../cart-item/CartItem';

// Redux
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

const CartDropdown = ({ cartItems, history }) => (
    <div className="cartDropdown">
    <h4 className='cartDropdown_text'>Your Items</h4>
    <div className="cartDropdown__items">
        {
            cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} /> ))
        }
    </div>
    <CustomButton onClick={() => history.push('/checkout')} >Checkout</CustomButton>
    </div>
);

const mapStateToProps = ({ cart: { cartItems }}) => ({
    cartItems
});



export default withRouter(connect(mapStateToProps)(CartDropdown));