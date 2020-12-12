import React from 'react';
import './header.css';

// Components
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

// Firebase
import { auth } from '../../firebase/firebase';


// Redux
import { connect } from 'react-redux';

// Router
import { Link, Redirect } from 'react-router-dom';

const Header = ({ currentUser, cartHidden }) => (

    <div className="header">

    <div className="header__logo">
        <Link className='header__link' to='/'>
            <img src='https://i.ibb.co/h7Fyd0L/logo-sm.png' alt="logo"/>
        </Link>
    </div>

    <div className="header__links">
        <Link to='/'>Home</Link>        
        <Link to='/shop'>All Products</Link>        
    </div>

    {currentUser ? <Redirect to="/" /> : ''}

    <div className="header__right">

    {/* User signed in - Show sign out link*/}
    {
        currentUser ? <div className='link' onClick={() => auth.signOut()}>Sign Out</div> : 
        <Link to='/login'>Login</Link>
    }

    <div className="header__cart">
        <CartIcon />
    </div>

    </div>

    {cartHidden ? '' :  <CartDropdown />}

    </div>
)

 const mapStateToProps = ({user: {currentUser}, cart: {cartHidden}}) => ({
    currentUser,
    cartHidden
 });

export default connect(mapStateToProps)(Header);