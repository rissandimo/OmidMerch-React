import React from 'react';
import './shop.css';

// Routing
import { Route } from 'react-router-dom';

// Components
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import WithSpinner from '../../components/with-spinner/withSpinner';

// Firestore
import { firestore, convertCollectionsArraySnapshotToMap } from '../../firebase/firebase';

// Pages
import CategoryPage from '../category/CategoryPage';

// Redux
import { connect } from 'react-redux';
import { updateProducts } from '../../redux/shop/shop-actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CategoryPageWithSpinner = WithSpinner(CategoryPage);

class Shop extends React.Component {

    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const { updateProducts } = this.props;
        const collectionRef = firestore.collection('collections');

       this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
           const collectionsMap = convertCollectionsArraySnapshotToMap(snapshot);
           updateProducts(collectionsMap);
           this.setState({ loading: false });
        })
    }
    
    render(){
        const { match } = this.props;
        const { loading } = this.state;

        return(
            <div className="shop">
                <Route 
                exact path={`${match.path}`} 
                render={ props => (<CollectionsOverviewWithSpinner isLoading={loading} {...props} /> )} /> 
                
                <Route
                 path={`${match.path}/:categoryId`} 
                 render={props => (<CategoryPageWithSpinner isLoading={loading} {...props} /> )} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateProducts: collectionsMap => dispatch(updateProducts(collectionsMap))
})

export default connect(null, mapDispatchToProps)(Shop);