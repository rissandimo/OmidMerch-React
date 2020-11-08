import React from 'react';
import './header.css';

import { Link } from 'react-router-dom';

class Header extends React.Component{

    render(){
        return(
            <div className="header">
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
                <Link to='/shop'>Shop</Link>
            </div>
        )
    }
}

export default Header;