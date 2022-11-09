import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../Pages/LandingPage'
import MedCategoryPage from '../Pages/MedCategoryPage'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/medcategory" element={<MedCategoryPage/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes