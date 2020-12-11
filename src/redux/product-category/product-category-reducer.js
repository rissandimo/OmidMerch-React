const INITIAL_STATE = {
    sections: [
        {
        title: 'Womens',
        imageUrl: 'https://i.ibb.co/sJG8hWX/13.jpg',
        id: 1,
        linkUrl: 'womens'
        },
        {
        title: 'Local Pickup',
        imageUrl: 'https://i.ibb.co/ZByc3Cx/36.jpg',
        id: 2,
        linkUrl: 'localPickup'
        }
    ]
};

const productCategoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default productCategoryReducer;