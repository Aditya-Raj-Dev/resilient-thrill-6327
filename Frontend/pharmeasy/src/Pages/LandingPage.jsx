import React from 'react'
import Footer from '../Components/Footer/Footer'

import CatSlider from '../Components/HomePage/CatSlider'
import Navbar from '../Components/HomePage/Navbar'

import { HealthBlog } from './HealthBlog'

import OfferSlider from '../Components/HomePage/OfferSlider'
import ShopByCategory from '../Components/HomePage/ShopByCategory'

const LandingPage = () => {
  return (
    <div>
        <Navbar />

        {/* <HealthBlog/> */}

        <CatSlider />
        <OfferSlider />
        <ShopByCategory />
        <Footer />
      


    </div>
  )
}

export default LandingPage