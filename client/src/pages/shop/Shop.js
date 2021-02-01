import React from 'react';
import './shop.css';

import { Route } from 'react-router-dom';

// Components
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';

import { firestore, convertCollectionsArraySnapshotToMap } from '../../firebase/firebase';

// Pages
import CategoryPage from '../category/CategoryPage';

// Redux
import { connect } from 'react-redux';
import { updateProducts } from '../../redux/shop/shop-actions';

class Shop extends React.Component {

    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const { updateProducts } = this.props;
        const collectionRef = firestore.collection('collections');

       this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
           const collectionsMap = convertCollectionsArraySnapshotToMap(snapshot);
           updateProducts(collectionsMap);
        //    console.log('shop page - collections map: ', collectionsMap);
        })
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
    updateProducts: collectionsMap => dispatch(updateProducts(collectionsMap))
})

export default connect(null, mapDispatchToProps)(Shop);