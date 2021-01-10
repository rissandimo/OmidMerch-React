import { createSelector } from 'reselect';
import productCategoryReducer from './product-category-reducer';

const getProductCateogory = state => state.productCategory;

export const getProductCategorySection = createSelector(
    [getProductCateogory],
    category => category.sections
);