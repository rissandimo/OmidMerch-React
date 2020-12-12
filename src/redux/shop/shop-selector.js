import { createSelector } from 'reselect';

const shopSelector = state => state.shop;

const CATEGORY_ID_MAP = {
    womens: 1,
    localPickup: 2,
    housewares: 3,
    jewelry: 4
}

export const getCollectionItems = createSelector(
    [shopSelector],
    shop => shop.collections
)

export const getCategoryItems = categoryUrlParam =>
  createSelector(
    [getCollectionItems],
    categories => categories.find(category => category.id === CATEGORY_ID_MAP[categoryUrlParam])
  );