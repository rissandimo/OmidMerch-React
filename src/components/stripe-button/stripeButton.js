import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 1000;
    const stripePublishableKey = 'pk_test_51HTuCLGlap3A7zAIyQX1bSHtbMDjIE7DuGETSigZyL4WlBsL8pRBFwqXd6yDmoPaiQNf9ftJPoRxEy6JQTxxTDSe00Kw0mqb8d';

    const onToken = token => {
        console.log(token);
        alert('Payment successful');
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

export default StripeCheckoutButton;