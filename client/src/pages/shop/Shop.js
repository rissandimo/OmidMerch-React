import React from 'react';
import './shop.css';

import { Route } from 'react-router-dom';

// Components
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';

// Firebase
import { firestore } from '../../firebase/firebase';

// Pages
import CategoryPage from '../category/CategoryPage';

class Shop extends React.Component {

    unsubscribeFromSnapshot = null;
    
    async componentDidMount(){
        const productsRef = firestore.collection('products');
        const productsSnapshot = productsRef.onSnapshot(async snapshot => {
            console.log('products snapshot', snapshot);
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

export default Shop;