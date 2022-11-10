import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../Pages/LandingPage'
import MedCategoryPage from '../Pages/MedCategoryPage'
import SingleProductPage from '../Pages/SingleProductPage'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/medcategory" element={<MedCategoryPage/>}></Route>
        <Route path="/singleproduct" element={<SingleProductPage />}></Route>

      </Routes>
    </div>
  )
}

export default AllRoutes