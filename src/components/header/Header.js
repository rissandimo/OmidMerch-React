import React from 'react';
import './header.css';

// Firebase
import { auth } from '../../firebase/firebase';

// Material UI
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

// Router
import { Link, Redirect } from 'react-router-dom';

const Header = ({ currentUser }) => (

    <div className="header">

    <div className="header__logo">
        <Link to='/'></Link>
        <img src='https://i.ibb.co/h7Fyd0L/logo-sm.png' alt="logo"/>
    </div>

    <div className="header__links">
        <Link to='/'>Home</Link>        
        <Link to='/shop'>Shop</Link>        
    </div>

    {currentUser ? <Redirect to="/" /> : ''}

    <div className="header__right">

    {/* User signed in - Show sign out link*/}
    {
        currentUser ? <div className='link' onClick={() => auth.signOut()}>Sign Out</div> : 
        <Link to='/login'>Login</Link>
    }

    <div className="header__cart">
        <ShoppingCartIcon fontSize='large'/>
    </div>

    </div>

    </div>
)
export default Header;