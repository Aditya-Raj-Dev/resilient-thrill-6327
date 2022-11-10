import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { HealthBlog } from '../Pages/HealthBlog'

import DrawerExample from '../Aadicomp/Login/Login'

import LandingPage from '../Pages/LandingPage'
import MedCategoryPage from '../Pages/MedCategoryPage'
import SingleProductPage from '../Pages/SingleProductPage'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/medcategory" element={<MedCategoryPage/>}></Route>
        <Route path="/blog" element={<HealthBlog/>} ></Route>
        <Route path="/singleproduct" element={<SingleProductPage />}></Route>
        <Route path="/login" element={<DrawerExample/>}/>

      </Routes>
    </div>
  )
}

export default AllRoutes