import React from 'react';
import './shop.css';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getCollectionItems } from '../../redux/shop/shop-selector';



import ProductPreview from '../../components/product-preview/ProductPreview';

const Shop = ({ collections }) => {
return(
    <div className="shop">
        {
        collections.map(({id, ...otherProductProps}) => {
            return <ProductPreview key={id} {...otherProductProps} />
        })
        }
    </div>
)
    
}

const mapStateToProps = createStructuredSelector({
    collections: getCollectionItems
})

export default connect(mapStateToProps)(Shop);