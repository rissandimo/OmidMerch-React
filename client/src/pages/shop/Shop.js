import React from 'react';
import './shop.css';

import { Route } from 'react-router-dom';

// Components
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';

// Firebase
import { firestore, convertCollectionsArraySnapshotToMap } from '../../firebase/firebase';

// Pages
import CategoryPage from '../category/CategoryPage';

// Redux
import { connect } from 'react-redux';
import { updateProducts } from '../../redux/shop/shop-actions';

class Shop extends React.Component {

    unsubscribeFromSnapshot = null;
    
    async componentDidMount(){
        const { updateProducts } = this.props;

        const productsRef = firestore.collection('products');
         productsRef.onSnapshot(async snapshot => {
           const productsMap = convertCollectionsArraySnapshotToMap(snapshot);
           updateProducts(productsMap);
        });
    }
    
    render(){
        
        const { match } = this.props;

        return(
            <div className="shop">
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateProducts: productsMap => dispatch(updateProducts(productsMap))
})

export default connect(null, mapDispatchToProps)(Shop);