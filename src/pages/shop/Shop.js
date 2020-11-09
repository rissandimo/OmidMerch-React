import React from 'react';

import SHOP_DATA from './shop-data'

class Shop extends React.Component{
    render(){
        return(
            <div className="products">
                {SHOP_DATA.map(product => {
                    
                })}
            </div>
        )
    }
}

export default Shop;