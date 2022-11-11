import React from 'react'
import Footer from '../Components/Footer/Footer'

import CatSlider from '../Components/HomePage/CatSlider'
import Navbar from '../Components/HomePage/Navbar'

import NewLaunches from '../Components/HomePage/NewLaunches'

import { HealthBlog } from './HealthBlog'
import OfferSlider from '../Components/HomePage/OfferSlider'
import ShopByCategory from '../Components/HomePage/ShopByCategory'
import Trending from '../Components/HomePage/Trending'
import LabTest from '../Components/HomePage/LabTest'
import Concern from '../Components/HomePage/Concern'

const LandingPage = () => {
  return (
    <div>
        <Navbar />

        {/* <HealthBlog/> */}

        <CatSlider />
        <OfferSlider />
        <ShopByCategory />
        <NewLaunches />
        <Trending />
        <LabTest />
        <Concern />
        <Footer />
      


    </div>
  )
}

export default LandingPage