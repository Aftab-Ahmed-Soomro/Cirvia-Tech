import React from 'react'
import ShopBanner from '../components/Shop/ShopBanner'
import ProductCategoryGrid from '../components/Shop/ProductCategoryGrid'
import PopularProducts from '../components/Shop/PopularProducts'

const ShopPage:React.FC = () => {
  return (
    <div>
      <ShopBanner />
      <ProductCategoryGrid />
      <PopularProducts />
    </div>
  )
}

export default ShopPage
