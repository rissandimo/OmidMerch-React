import React from 'react';
import './cartIcon.css'

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart-actions'

const CartIcon = ({ toggleCartHidden, itemCount }) => (

    <div className="cartIcon" onClick={toggleCartHidden}>
           <ShoppingCartIcon className='cartIcon__shopping-icon'/>
           <span className="cartIcon__item-count">{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = ({cart: { cartItems } }) => ({
    itemCount: cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
})


export default connect(
    mapStateToProps,
    mapDispatchToProps)(CartIcon);