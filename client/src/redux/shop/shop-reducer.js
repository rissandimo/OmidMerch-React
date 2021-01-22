import SHOP_DATA from '../../pages/shop/shop-data';

import ShopActionTypes from './shop-types';

const INITIAL_STATE = {
    products: SHOP_DATA
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.state){
        case ShopActionTypes.UPDATE_PRODUCTS:
            return {
                ...state,
                products: action.payload 
            }
        default:
            return state;
    }
}

export default shopReducer;