import React from 'react';
import './product.css';

const PreviewItem = ({ item }) => {

    const { name, imageUrl, price } = item;
    return (
        <div className="previewItem">
        <div className="previewItem_description">
            <p>{name}</p>
            <h4>${price}</h4>
        </div>
            <img src={imageUrl} alt=""/>
        </div>
    )
}

export default PreviewItem;