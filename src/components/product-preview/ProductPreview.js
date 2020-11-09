import React from 'react';
import './productPreview.css';

const ProductPreview = ({title, items}) => {
    return (
        <div className="productPreview">
            <h4>{title}</h4>
            <div className="preview">
                {items.map(item => (
                    <img src={item.imageUrl} alt="product"/>
                ))}
            </div>
        </div>
    )
}

export default ProductPreview;