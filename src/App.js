import React from 'react';
import './App.css';

import Header from './components/header/Header';
import HomePage from './pages/home/HomePage';
import Login from './components/login/Login'
import Register from './components/register/Register';
import Shop from './pages/shop/Shop';

import { auth, createUserProfileDocument } from './firebase/firebase';

// Routing
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser: null
    };
  }

  logoutUser = null;

  // When user logs in/out - save state in app
  componentDidMount(){
   this.logoutUser = auth.onAuthStateChanged(async userAuth => {

    // if user is logged in
    if(userAuth){

      // get user doc ref
      const userDocRef = await createUserProfileDocument(userAuth);

      // get user info from db
      userDocRef.onSnapshot(snapshot => {
        // set user info in app state
        this.setState({
          user: {
            id: snapshot.id,
            ...snapshot.data()
          }
        }, () => {
          console.log(this.state);
        })
      });
    }else{
      this.setState({currentUser: userAuth});
    }
    });
  }

  componentWillUnmount(){
    this.logoutUser();
  }


      render(){
        return (
          <div className="app">
            <Header currentUser={this.state.currentUser} />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/shop' component={Shop} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
            </Switch>
          </div>
        );
      }
}

export default App;
