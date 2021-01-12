import React from 'react';
import './cartIcon.css'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart-actions'

const CartIcon = ({ toggleCartHidden, itemCount }) => (

    <div className="cartIcon" onClick={toggleCartHidden}>
           <ShoppingIcon className='cartIcon__shopping-icon'/>
           <span className="cartIcon__item-count">10</span>
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