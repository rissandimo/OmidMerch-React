import './App.css';

import Header from './components/header/Header';
import HomePage from './pages/home/HomePage';
import Login from './components/login/Login'
import Register from './components/register/Register';

import { Route, Switch } from 'react-router-dom';

function App() {
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

export default App;
