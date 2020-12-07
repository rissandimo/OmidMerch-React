
import { createSelector } from 'reselect';

export const getCartSection = state => state.cart;

export const getCartItems = createSelector(
    [getCartSection],
    cart => cart.cartItems
);

export const getCartTotal = createSelector(
    [getCartItems],
    cartItems =>
    cartItems.reduce( (cartTotal, cartItem) => cartTotal + cartItem.quantity * cartItem.price, 0)
);