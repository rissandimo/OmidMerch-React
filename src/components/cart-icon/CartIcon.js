import React from 'react';
import './cartIcon.css'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart-actions'

const CartIcon = ({ toggleCartHidden }) => (

    <div className="cartIcon" onClick={toggleCartHidden}>
           <ShoppingIcon className='cartIcon__shopping-icon'/>
           <span className="cartIcon__item-count">0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})


export default connect(null, mapDispatchToProps)(CartIcon);