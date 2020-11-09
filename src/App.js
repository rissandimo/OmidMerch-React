import './App.css';

import Header from './components/header/Header';
import HomePage from './pages/home/HomePage';
import Login from './components/login/Login'
import Register from './components/register/Register';

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

    // if authentication user is logged in
    if(userAuth){

      // store authenticated user in firebase db and get back user document reference from firestore
      const userDocRef = await createUserProfileDocument(userAuth);

      // use document reference get user info from db
      userDocRef.onSnapshot(snapshot => {
        // set user info in app state
        this.setState({
          currentUser: {
            id: snapshot.id,
            ...snapshot.data()
          }
        }, () => {
          console.log(this.state);
        })
      });
    }else{
      this.setState({currentUser: userAuth});
      console.log("User logged out");
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
