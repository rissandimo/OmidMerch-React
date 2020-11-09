import React from 'react';
import PreviewItem from '../preview-item/Product';
import './productPreview.css';

const ProductPreview = ({title, items}) => {
    return (
        <div className="productPreview">
            <h4>{title}</h4>
            <div className="preview">
                {items.map(item => (
                    <PreviewItem key={item.id} item={item} alt="product"/>
                ))}
            </div>
        </div>
    )
}

export default ProductPreview;