import React from 'react';
import PreviewItem from '../preview-item/PreviewItem';
import './productPreview.css';

const ProductPreview = ({title, items}) => {
    return (
        <div className="productPreview">
            <h2 className='productPreview__title'>{title}</h2>
            {title === 'Local Pickup' && 
            <h2 className="title__pickups">
                For local pickups, please call (323) 553-1462 or contact us via <a href={"mailto:omidmerch@gmail.com"} className="title__link">email</a>
            </h2> }
            <div className="preview">
                {items.map(item => (
                    <PreviewItem key={item.id} item={item} title={title} alt="product"/>
                ))}
            </div>
        </div>
    )
}

export default ProductPreview;