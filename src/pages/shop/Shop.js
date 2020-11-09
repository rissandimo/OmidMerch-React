import React from 'react';

import SHOP_DATA from './shop-data';

import Product from '../../components/product/Product';

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
                    products.map((product, index) => {
                      return <Product key={product.id} title={product.title} />
                    })
                }

            </div>
        )
    }
}

export default Shop;