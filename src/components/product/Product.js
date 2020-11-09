import React from 'react';

const Product = ({ name, price, imageUrl }) => {
    console.log('product - name: ', name);
    return (
    <div className="product">
        <p>{name}</p>
    </div>
    )
}

export default Product;