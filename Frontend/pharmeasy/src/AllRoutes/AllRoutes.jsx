import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { HealthBlog } from '../Pages/HealthBlog'

import DrawerExample from '../Aadicomp/Login/Login'

import LandingPage from '../Pages/LandingPage'
import MedCategoryPage from '../Pages/MedCategoryPage'
import SingleProductPage from '../Pages/SingleProductPage'
import Cart from '../Aadicomp/cartpage/Cart'
import Product from '../Pages/Product'
import PaymentPage from '../Pages/PaymentPage'
import { Thankyou } from '../Pages/Thankyou'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/medcategory" element={<MedCategoryPage/>}></Route>
        <Route path="/blog" element={<HealthBlog/>} ></Route>
        <Route path="/products/:id" element={<SingleProductPage />}></Route>
        <Route path="/login" element={<DrawerExample/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/products" element={<Product/>}/>
        <Route path="/payment" element={<PaymentPage/>}/>
        <Route path="/thankyou" element={<Thankyou/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes