import React from 'react';
import './categoryPage.css';

import PreviewItem from '../../components/preview-item/PreviewItem';
import { render } from '@testing-library/react';

const CategoryPage = ({ match }) => {
    console.log(match);
    return(
        <div className="categoryPage">
            <h2>Category Page</h2>
        </div>
    )
}

export default CategoryPage;