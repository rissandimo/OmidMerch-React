import { createSelector } from 'reselect';

const shopSelector = state => state.shop;


export const getCollectionItems = createSelector(
    [shopSelector],
    shop => shop.products // shop-data.js
)

// Shop Page - get category names and their respective items
// Get array of category items
// Get arrays of all they keys - womens/localPickup, etc..
// For each key, get the items that pertain to that key
export const getCategoryItemsForPreview = createSelector(
  [getCollectionItems],
  categories => categories ? Object.keys(categories).map(key => categories[key]) : []
)

// Category Page
// Pass category names and their respective items
// Only show categories based on categoryUrlParam
export const getCategoryItems = categoryUrlParam =>
  createSelector(
    [getCollectionItems],
    categories => (categories ? categories[categoryUrlParam] : null)
  );