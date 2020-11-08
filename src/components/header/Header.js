import React from 'react';
import './header.css';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { Link } from 'react-router-dom';

class Header extends React.Component{

    render(){
        return(
            <div className="header">

            <div className="header__links">
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
                <Link to='/shop'>Shop</Link>
            </div>

            <div className="header__cart">
                <ShoppingCartIcon fontSize='large'/>
            </div>

            </div>
        )
    }
}

export default Header;