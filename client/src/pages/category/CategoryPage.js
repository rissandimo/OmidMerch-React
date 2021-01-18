import React from 'react';
import './categoryPage.css';

import jewelryHero from '../../assets/hero/brooke-cagle-kElEigko7PU-unsplash.jpg';

import { connect } from 'react-redux';

import { getCategoryItems } from '../../redux/shop/shop-selector';

import PreviewItem from '../../components/preview-item/PreviewItem';

const CategoryPage = ({ category }) => {

    const { title, items } = category;

    return(
        <div className="category__page">
            {/* <div className="hero">
                <img src={jewelryHero} alt=""/>
            </div> */}
            <h2 className="title">{ title }</h2>
            {title === 'Local Pickup' && 
            <h2 className="title__pickups">
                For local pickups, please call (323) 553-1462 or contact us via <a href={"mailto:omidmerch@gmail.com"} className="title__link">email</a>
            </h2> }
            <div className="items">
                {items.map(item => (
                    <PreviewItem key={item.id} item={item} title={title} />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    category: getCategoryItems(ownProps.match.params.categoryId)(state)
  });

export default connect(mapStateToProps)(CategoryPage);