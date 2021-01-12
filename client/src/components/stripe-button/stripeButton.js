import React from 'react';

import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    
    const StripePublishableKey = 'pk_test_51HTuCLGlap3A7zAIyQX1bSHtbMDjIE7DuGETSigZyL4WlBsL8pRBFwqXd6yDmoPaiQNf9ftJPoRxEy6JQTxxTDSe00Kw0mqb8d';

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
            alert('Payment Successful');
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
                stripeKey={StripePublishableKey}
                token={onToken} 
            />
        </div>
    )
}

export default StripeCheckoutButton;