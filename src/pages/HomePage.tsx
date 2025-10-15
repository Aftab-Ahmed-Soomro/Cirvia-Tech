import React from 'react'
import Cirvia from '../components/Home/Cirvia'
import Services from '../components/Home/Services'
import About from '../components/Home/About'
import Counter from '../components/Home/Counter'
import ProductCategoryGrid from '../components/Shop/ProductCategoryGrid'
import Companies from '../components/Home/Companies'
import NewArrivals from '../components/Home/NewArrivals'
import Testimonials from '../components/Home/Testimonials'
import PopularProducts from '../components/Home/PopularProducts'
import Product from '../common/Product'
import Subscribe from '../common/Subscribe'
import InstagramGallery from '../common/InstagramGallery'

const HomePage: React.FC = () => {
  return (
    <div className=''>
        <Cirvia />
        <Services />
        <Product />
        <About />
        <PopularProducts />
        <Counter />
        <ProductCategoryGrid />
        <Companies />
        <NewArrivals />
        <Testimonials />
        <Subscribe />
        <InstagramGallery />
    </div>
  )
}

export default HomePage
