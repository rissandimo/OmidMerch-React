import React from 'react';
import './previewItem.css';

import { addCartItem } from '../../redux/cart/cart-actions';
import { connect } from 'react-redux';

import CustomButton from '../button/CustomButton';

const PreviewItem = ({ item, addCartItem }) => {

    const { name, imageUrl, price } = item;
    return (
        <div className="previewItem">
            <h3 className="previewItem__name">{name}</h3>
            <div className="image">
                <img src={imageUrl} alt=""/>
            </div>
            <div className="previewItem_description">
                <h4>${price}</h4>
                <CustomButton onClick={() => addCartItem(item)} className='previewItem__button' >ADD TO CART</CustomButton>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addCartItem: item => dispatch(addCartItem(item))
})

export default connect(null, mapDispatchToProps)(PreviewItem);