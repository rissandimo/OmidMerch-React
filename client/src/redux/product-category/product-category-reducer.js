const INITIAL_STATE = {
    sections: [
        {
        title: 'Womens',
        imageUrl: 'https://i.ibb.co/GnW3m4z/3.jpg',
        id: 1,
        linkUrl: '/shop/womens'
        },
        // {
        // title: 'Local Pickup',
        // imageUrl: 'https://i.ibb.co/ZByc3Cx/36.jpg',
        // id: 2,
        // linkUrl: '/shop/localPickup'
        // },
        {
        title: 'Housewares',
        imageUrl: 'https://i.ibb.co/ZByc3Cx/36.jpg',
        id: 3,
        linkUrl: '/shop/housewares'
        },
        {
        title: 'Jewelry',
        imageUrl: 'https://i.ibb.co/txvbLkP/7.jpg',
        id: 4,
        linkUrl: '/shop/jewelry'
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