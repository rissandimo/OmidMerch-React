import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

// import { connect } from 'react-redux';

import axios from 'axios';
// import { clearAllItemsFromCart } from '../../redux/cart/cart-actions';

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100;
    // const stripePublishableKey = 'pk_test_51HTuCLGlap3A7zAIyQX1bSHtbMDjIE7DuGETSigZyL4WlBsL8pRBFwqXd6yDmoPaiQNf9ftJPoRxEy6JQTxxTDSe00Kw0mqb8d';
    const stripePublishableKey = 'pk_live_51HTuCLGlap3A7zAIhzAXSb0iF8H5Dfiiun5H4PiZaQFfRPI1DCmm36yA1lGdHfjWf7VmGOu2kg4j3F17Euy1HL8U00aDTAEYeg';

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
            alert('Payment Successful');
            // clearAllItemsFromCart();
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert('This were an issue with your payment. Please make sure you use the provided credit card');
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
                stripeKey={stripePublishableKey}
                token={onToken} 
            />
        </div>
    )
}

// const mapDispatchToProps = dispatch => ({
//     clearAllItemsFromCart: dispatch(clearAllItemsFromCart())
// })

export default StripeCheckoutButton;