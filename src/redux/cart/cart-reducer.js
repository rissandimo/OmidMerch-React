import CartActionTypes from './cart-types';

const INITIAL_STATE = {
    cartHidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.ADD_TO_CART:{
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        }
        case CartActionTypes.TOGGLE_CART_HIDDEN:
        return {
            ...state,
            cartHidden: !state.cartHidden
        }
        default:
            return state;
    }
}

export default cartReducer;