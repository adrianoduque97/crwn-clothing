import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price})=> {
    const priceForStripe = price*100;
    const publicKey ='pk_test_51HPzQ1CRcZOgy23lqoVPIvmKngPkePmuyi2TTSRAu60Ppyhujg6qaSipp0Cc1yq4rZmlmMUEkcS49EYeSMo0yKBC00GXBRBMAa';

    const onToken = token => {
        console.log(token)
        alert('Payment Succed')
    }
    return(
        <StripeCheckout
            label='Pay Now'
            name = 'CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image = 'https://sendeyo.com/up/d/f3eb2117da'
            description={`Your Price value is $${price}`}
            amount= {priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey = {publicKey}
        />
    )
}

export default StripeCheckoutButton