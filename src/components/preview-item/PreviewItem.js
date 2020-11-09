import React from 'react';
import './previewItem.css';

import CustomButton from '../button/CustomButton';

const PreviewItem = ({ item }) => {

    const { name, imageUrl, price } = item;
    return (
        <div className="previewItem">
        <div className="previewItem_description">
            <p>{name}</p>
            <h4>${price}</h4>
        </div>
            <img src={imageUrl} alt=""/>
            <CustomButton text='Add to cart' />
        </div>
    )
}

export default PreviewItem;