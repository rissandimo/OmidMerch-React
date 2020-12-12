import { createSelector } from 'reselect';

const shopSelector = state => state.shop;

const COLLECTION_ID_MAP = {
    womens: 1,
    localPickup: 2,
    housewares: 3,
    jewelry: 4
}

export const getCollectionItems = createSelector(
    [shopSelector],
    shop => shop.collections
)

export const selectCollection = collectionUrlParam =>
  createSelector(
    [getCollectionItems],
    collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
  );