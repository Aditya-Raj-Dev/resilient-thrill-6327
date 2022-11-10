import React from 'react'
import Footer from '../Components/Footer/Footer'

import CatSlider from '../Components/HomePage/CatSlider'
import Navbar from '../Components/HomePage/Navbar'
import NewLaunches from '../Components/HomePage/NewLaunches'
import OfferSlider from '../Components/HomePage/OfferSlider'
import ShopByCategory from '../Components/HomePage/ShopByCategory'

const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <CatSlider />
        <OfferSlider />
        <ShopByCategory />
        <NewLaunches />
        <Footer />
      

    </div>
  )
}

export default LandingPage