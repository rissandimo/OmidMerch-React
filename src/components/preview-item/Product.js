import React from 'react';

const PreviewItem = ({ item }) => {

    const { name, imageUrl, price } = item;
    return (
        <div className="previewItem">
            <p>{name}</p>
            <img src={imageUrl} alt=""/>
            <h4>${price}</h4>
        </div>
    )
}

export default PreviewItem;