import React from 'react';
import './App.css';

import Header from './components/header/Header';
import HomePage from './pages/home/HomePage';
import Login from './components/login/Login'
import Register from './components/register/Register';

import { auth } from './firebase/firebase';

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

  // componentDidMount(){
  //   this.logoutUser = auth.onAuthStateChanged(function(googleUser){
  //     if(googleUser){
  //       this.setState({currentUser: googleUser},
  //         () => console.log(this.state.currentUser))
  //     }
  //   })
  // }

  componentDidMount(){
    auth.onAuthStateChanged(googleUser => {
      this.setState({currentUser: googleUser});

      console.log(googleUser);
    });
  }




      render(){
        return (
          <div className="app">
            <Header />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
            </Switch>
          </div>
        );
      }
}

export default App;
