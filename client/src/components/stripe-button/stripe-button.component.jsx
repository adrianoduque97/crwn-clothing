import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({price})=> {
    const priceForStripe = price*100;
    const publicKey ='pk_test_51HPzQ1CRcZOgy23lqoVPIvmKngPkePmuyi2TTSRAu60Ppyhujg6qaSipp0Cc1yq4rZmlmMUEkcS49EYeSMo0yKBC00GXBRBMAa';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {alert('Payment Successful',)})
          .catch(error => {
            console.log("ERROR", JSON.parse(error))
            alert('There was an issue')
            })
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