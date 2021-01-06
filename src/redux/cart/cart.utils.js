export const addItemToCart = (cartItems, cartItemToAdd) => {

    const existingCartItem = cartItems.find(currentCartItem => currentCartItem.id === cartItemToAdd.id);

    if(existingCartItem){
        alert('Sorry, product can only be added once to cart');
        return cartItems;
    }else{
    return [...cartItems, {...cartItemToAdd, quantity: 1}];
    }

    // if(existingCartItem){
    //     return cartItems.map(currentCartItem => 
    //         // if item id matches current cart item
    //         currentCartItem.id === cartItemToAdd.id 
    //         //return new OBJECT containing EXISTING cart item, WITH quantity property incremented
    //         // this quantity property will function b/c in the case that the item already exists, it was assigned a 
    //         // quantity property of '1' the first time it was added
    //         ? {...currentCartItem, quantity: currentCartItem.quantity + 1}
    //         // else - just return the cart item - unmodififed/with no quantity increase
    //         : currentCartItem
    //         )
    // }

    //return new array with all existing cart items + object (cartItemToAdd with base quantity of 1)
    //this is the case if it is being added to the cart for the very first time
    // return [...cartItems, {...cartItemToAdd, quantity: 1}];
};