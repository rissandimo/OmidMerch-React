import React from 'react';
import './categoryPage.css';

import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop-selector';

import PreviewItem from '../../components/preview-item/PreviewItem';

const CategoryPage = ({ collection }) => {
    console.log(collection);
    return(
        <div className="categoryPage">
            <h2>Category Page</h2>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
  });

export default connect(mapStateToProps)(CategoryPage);