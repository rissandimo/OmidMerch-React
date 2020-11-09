import React from 'react';
import './HomePageSection.css';

const HomePageSection = ({ title, imageUrl }) => {
    return(
        <div className="homePageSection">
            <div className="homePageSection__pic">
                <img src={imageUrl} alt="product section"/>
            </div>
            <div className="homePageSection__title">
                <h4>{title}</h4>
            </div>
        </div>
    )
}

export default HomePageSection;