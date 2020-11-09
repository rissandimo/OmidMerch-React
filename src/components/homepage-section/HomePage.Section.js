import React from 'react';
import './HomePageSection.css';

const HomePageSection = ({ title, imageUrl }) => {
    return(
        <div className="homePageSection">
            <div className="homePageSection__pic">
                <img src={imageUrl} alt="product section"/>
            </div>
            <div className="homePageSection__title">
                <h5>{title}</h5>
            </div>
        </div>
    )
}

export default HomePageSection;