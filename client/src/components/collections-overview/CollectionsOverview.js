import React from 'react';
import './collectionsOverview.css';

import ProductPreview from '../product-preview/ProductPreview';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getCategoryItemsForPreview } from '../../redux/shop/shop-selector';

const CollectionsOverview = ({ collections }) => (
    <div className="collectionsOverview">
        {
        collections.map(({id, ...otherProductProps}) => {
            return <ProductPreview key={id} {...otherProductProps} />
        })
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: getCategoryItemsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);