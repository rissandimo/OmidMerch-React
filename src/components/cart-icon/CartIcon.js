import React from 'react';
import './cartIcon.css'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = () => (

    <div className="cartIcon">
           <ShoppingIcon className='cartIcon__shopping-icon'/>
           <span className="cartIcon__item-count">0</span>
    </div>
)

export default CartIcon;