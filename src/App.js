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

  componentDidMount(){
   this.logoutUser = auth.onAuthStateChanged(async userAuth => {
       this.setState({currentUser: userAuth});

      createUserProfileDocument(userAuth);
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
