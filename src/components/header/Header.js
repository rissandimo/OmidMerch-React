import React from 'react';
import './header.css';

// Firebase
import { auth } from '../../firebase/firebase';

// Material UI
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

// Router
import { Link } from 'react-router-dom';

const Header = ({ currentUser }) => (

    <div className="header">

    <div className="header__links">
        <Link to='/shop'>Shop</Link>

        {
            currentUser ? '' : <Link to='/login'>Login</Link>
        }
        
    </div>

    <div className="header__right">
    <div className="header__cart">
        <ShoppingCartIcon fontSize='large'/>
    </div>

    </div>

    </div>
)
export default Header;