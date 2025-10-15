import React from 'react'
import CheckoutBanner from '../components/Checkout/CheckoutBanner'
import CheckoutPayment from '../components/Checkout/CheckoutPayment'

const CheckoutPage:React.FC = () => {
  return (
    <div>
      <CheckoutBanner />
      <CheckoutPayment />
    </div>
  )
}

export default CheckoutPage
