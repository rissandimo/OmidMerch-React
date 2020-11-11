import React from 'react';
import './previewItem.css';

import { addCartItem } from '../../redux/cart/cart-actions';
import { connect } from 'react-redux';

import CustomButton from '../button/CustomButton';

const PreviewItem = ({ item, addCartItem }) => {

    const { name, imageUrl, price } = item;
    return (
        <div className="previewItem">
        <div className="previewItem_description">
            <p>{name}</p>
            <h4>${price}</h4>
        </div>
            <img src={imageUrl} alt=""/>
            <CustomButton onClick={() => addCartItem(item)} >
        Add to cart
      </CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addCartItem: item => dispatch(addCartItem(item))
})

export default connect(null, mapDispatchToProps)(PreviewItem);