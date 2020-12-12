import React from 'react';
import './shop.css';

import { Route } from 'react-router-dom';

// Components
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';

// Pages
import CategoryPage from '../category/CategoryPage';

const Shop = ({ match }) => {
    console.log(match);
return(
    <div className="shop">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CategoryPage} />
    </div>
)
}

export default Shop;