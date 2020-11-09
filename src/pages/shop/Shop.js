import React from 'react';
import './shop.css';

import SHOP_DATA from './shop-data';

import ProductPreview from '../../components/product-preview/ProductPreview';

class Shop extends React.Component{

    constructor(){
        super();

        this.state = {
            products: SHOP_DATA
        }
    }
    render(){

        const { products } = this.state;

        return(
            <div className="shop">

                {
                    products.map(({id, ...otherProductProps}) => {
                      return <ProductPreview key={id} {...otherProductProps} />
                    })
                }

            </div>
        )
    }
}

export default Shop;