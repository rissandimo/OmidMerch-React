import React from 'react';
import PreviewItem from '../preview-item/PreviewItem';
import './productPreview.css';

const ProductPreview = ({title, items}) => {
    return (
        <div className="productPreview">
            <h2 className='productPreview__title'>{title}</h2>
            <div className="preview">
                {items.map(item => (
                    <PreviewItem key={item.id} item={item} alt="product"/>
                ))}
            </div>
        </div>
    )
}

export default ProductPreview;