import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HealthBlog } from '../Pages/HealthBlog'
import LandingPage from '../Pages/LandingPage'
import MedCategoryPage from '../Pages/MedCategoryPage'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/medcategory" element={<MedCategoryPage/>}></Route>
        <Route path="/blog" element={<HealthBlog/>} ></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes