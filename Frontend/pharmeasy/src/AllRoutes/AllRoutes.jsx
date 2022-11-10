import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SingleProductPage from '../Pages/SingleProductPage'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        
        <Route path="/singleproduct" element={<SingleProductPage />}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes