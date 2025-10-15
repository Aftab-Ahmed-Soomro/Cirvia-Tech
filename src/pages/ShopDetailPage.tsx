import React from 'react'
import ShopDetailBanner from '../components/Shop-Detail/ShopDetailBanner'
import ProductDetails from '../components/Shop-Detail/ProductDetails'
import ProductDescription from '../components/Shop-Detail/ProductDescription'
import Product from '../common/Product'
import Subscribe from '../common/Subscribe'
import InstagramGallery from '../common/InstagramGallery'

const ShopDetailPage:React.FC = () => {
  return (
    <div>
      <ShopDetailBanner />
      <ProductDetails />
      <ProductDescription />
      <Product />
      <Subscribe />
      <InstagramGallery />
    </div>
  )
}

export default ShopDetailPage
