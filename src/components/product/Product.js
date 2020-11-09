import React from 'react';

const Product = ({ title, price, imageUrl }) => {
    console.log('product - name: ', title);
    return (
    <div className="product">
        <p>{title}</p>
    </div>
    )
}

export default Product;