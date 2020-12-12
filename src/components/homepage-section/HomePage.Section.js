import React from 'react';
import './HomePageSection.css';

import { Link } from 'react-router-dom';

const HomePageSection = ({ title, imageUrl, linkUrl }) => {
    return(
        <div className="homePageSection">
            <div className="homePageSection__pic">
                <Link to={linkUrl} className='homePageSection__link'>
                    <img src={imageUrl} alt="product section"/>
                </Link>
            </div>
             <h4 className="homePageSection__title">{title}</h4>
        </div>
    )
}

export default HomePageSection;