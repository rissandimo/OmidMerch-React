import CartActionTypes from './cart-types';

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})

export const clearAllItemsFromCart = () => ({
    type: CartActionTypes.CLEAR_CART
})

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addCartItem = item => ({
    type: CartActionTypes.ADD_TO_CART,
    payload: item
})