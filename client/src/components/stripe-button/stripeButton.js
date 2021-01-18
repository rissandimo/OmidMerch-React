import React from 'react';

import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import { connect } from 'react-redux';

import { clearAllItemsFromCart } from '../../redux/cart/cart-actions';

import { firestore } from '../../firebase/firebase';

const StripeCheckoutButton = ({ price, cartItems, dispatch, user }) => {
    
    // const StripePublishableKey = 'pk_live_51HTuCLGlap3A7zAIhzAXSb0iF8H5Dfiiun5H4PiZaQFfRPI1DCmm36yA1lGdHfjWf7VmGOu2kg4j3F17Euy1HL8U00aDTAEYeg';
    const StripePublishableKey='pk_test_51HTuCLGlap3A7zAIyQX1bSHtbMDjIE7DuGETSigZyL4WlBsL8pRBFwqXd6yDmoPaiQNf9ftJPoRxEy6JQTxxTDSe00Kw0mqb8d';

    const priceForStripe = price * 100;

    const onToken = token => {
        console.log(token);
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            
            // Save purchase to database
            firestore.collection('users')
            .doc(user?.id)
            .collection('orders')
            .doc(token.id)
            .set({
                cart: cartItems,
                amount: price,
                created: token.created
            }).then(() => console.log('purchase saved to database'))
            .catch(error => console.log(error.message))

        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert('This were an issue with your payment. Please make sure you use the provided credit card');
        })

        dispatch({
            type: 'CLEAR_CART'
        })       
    }
    
    return(
        <div className="stripe__checkout_button">
            <StripeCheckout
                amount={priceForStripe}
                billingAddress
                description={`Your total is $${price}`}
                image= 'https://i.ibb.co/h7Fyd0L/logo-sm.png'
                label="Pay Now"
                name="Omid Merch"
                panelLabel="Pay Now"
                shippingAddress
                stripeKey={StripePublishableKey}
                token={onToken} 
            />
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user.currentUser
})

export default connect(mapStateToProps)(StripeCheckoutButton);