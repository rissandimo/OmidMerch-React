import React from 'react';
import './cartDropdown.css';

// Components
import CustomButton from '../button/CustomButton';

const CartDropdown = () => (
    <div className="cartDropdown">
    <h4 className='cartDropdown_text'>Your Items</h4>
    <CustomButton text='Checkout' className='cartDropdown__checkout-button'/>
    </div>
)

export default CartDropdown;