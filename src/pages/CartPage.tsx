import React from 'react'
import CartBanner from '../components/Cart/CartBanner'
import ShoppingCart from '../components/Cart/ShoppingCart'

const CartPage:React.FC = () => {
  return (
    <div>
      <CartBanner />
      <ShoppingCart />
    </div>
  )
}

export default CartPage
