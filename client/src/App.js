import React from 'react';
import './App.css';

// Components
import CheckoutPage from './pages/checkout/Checkout';
import Header from './components/header/Header';
import HomePage from './pages/home/HomePage';
import LocalPickup from './pages/localPickup/LocalPickup';
import Login from './components/login/Login'
import Register from './components/register/Register';
import Shop from './pages/shop/Shop';
import Womens from './pages/womens/Womens';

import { auth, createUserProfileDocument } from './firebase/firebase';

// Redux
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user-actions';

// Routing
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {

  logoutUser = null;

  
  componentDidMount(){
    
    const { setCurrentUser } = this.props;
    
    // When user logs in/out - save state in app
    this.logoutUser = auth.onAuthStateChanged(async userAuth => {
      
    // if authentication user is logged in
    if(userAuth){

      // store authenticated user in firebase db and get back user document reference from firestore
      const userDocRef = await createUserProfileDocument(userAuth);

      // use document reference get user info from db
      userDocRef.onSnapshot(snapshot => {
        // set user info in app state
        setCurrentUser ({
            id: snapshot.id,
            ...snapshot.data()
          });
        });

        setCurrentUser(userAuth);                 
    }
    else{
      // Update local state = no logged in user
      setCurrentUser(userAuth);
    }
    });
  }

  componentWillUnmount(){
    this.logoutUser();
  }


      render(){
        return (
          <div className="app">
            <Header />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/shop' component={Shop} />
              <Route path='/localPickup' component={LocalPickup} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/womens' component={Womens} />
              <Route path='/checkout' component={CheckoutPage} />
            </Switch>
          </div>
        );
      }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
