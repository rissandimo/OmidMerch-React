import { createSelector } from 'reselect';

const shopSelector = state => state.shop;

export const getCollectionItems = createSelector(
    [shopSelector],
    shop => shop.collections
)