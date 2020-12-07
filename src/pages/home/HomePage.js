import React from 'react';
import './home-page.css';

// Components
import HomePageSection from '../../components/homepage-section/HomePage.Section';

// Redux
import { connect } from 'react-redux';
import { getProductCategorySection } from '../../redux/product-category/product-category-selectors';

import { createStructuredSelector } from 'reselect';

const HomePage = ({ sections }) => {

    return(
        <div className="homePage">
        {
        sections.map(({ id, ...otherProps}) => (
            <HomePageSection key={id} {...otherProps} />
        ))
        }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: getProductCategorySection
})

export default connect(mapStateToProps)(HomePage);