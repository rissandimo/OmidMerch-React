// Redux
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducers
import cartReducer from '../redux/cart/cart-reducer';
import productCategoryReducer from '../redux/product-category/product-category-reducer';
import shopReducer from '../redux/shop/shop-reducer';
import userReducer from '../redux/user/user-reducer';

const persistConfig = {
    key: 'root',
    storage, // use local storage
    whitelist: ['cart'] // persist cart reducer, user persisted with firebase
};

const rootReducer = combineReducers({
    productCategory: productCategoryReducer,
    cart: cartReducer,
    shop: shopReducer,
    user: userReducer
})

export default persistReducer(persistConfig, rootReducer);