import React from 'react'

import {Footer} from "../Components/Footer/Footer"
import CatSlider from '../Components/HomePage/CatSlider'
import Navbar from '../Components/HomePage/Navbar'

import NewLaunches from '../Components/HomePage/NewLaunches'

import { HealthBlog } from './HealthBlog'
import OfferSlider from '../Components/HomePage/OfferSlider'
import ShopByCategory from '../Components/HomePage/ShopByCategory'
import Trending from '../Components/HomePage/Trending'
import LabTest from '../Components/HomePage/LabTest'
import Concern from '../Components/HomePage/Concern'
import FeaturedBrand from '../Components/HomePage/FeaturedBrand'
import BookLabTest from '../Components/HomePage/BookLabTest'
import Deals from '../Components/HomePage/Deals'
import SpotLight from '../Components/HomePage/SpotLight'

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      {/* <HealthBlog/> */}

        {/* <Navbar /> */}

        {/* <HealthBlog/> */}

         <CatSlider />
        <OfferSlider />
        <ShopByCategory />

        <NewLaunches />
        <Trending />
        <LabTest />
        <Concern />
        <BookLabTest/>
        <Deals />
        <SpotLight />
        <FeaturedBrand />
        <Footer />


      
    </div>
  )
}

export default LandingPage