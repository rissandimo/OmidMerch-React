import React from 'react';
import './categoryPage.css';

import { connect } from 'react-redux';

import { getCategoryItems } from '../../redux/shop/shop-selector';

import PreviewItem from '../../components/preview-item/PreviewItem';

const CategoryPage = ({ category }) => {
    console.log(category);
    return(
        <div className="categoryPage">
            <h2>Category Page</h2>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    category: getCategoryItems(ownProps.match.params.categoryId)(state)
  });

export default connect(mapStateToProps)(CategoryPage);