import React, { useCallback, useEffect, useState } from 'react'

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
import Searchbar from '../Components/HomePage/Searchbar'

import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'


const LandingPage = () => {

  
  const [productsList, setProductsList] = useState([])
  const products = useSelector((state)=> state.AppRedux.products )
  const dispatch = useDispatch()
  const getAllData=()=>{
    axios.get("https://easy-ruby-peacock-hose.cyclic.app/api/products").then((res)=> setProductsList(res.data))
    .catch((err)=> console.log(err))
  }
  useEffect(()=>{
    getAllData()
    
  },[dispatch ])




  return (
    <div>
      {/* <HealthBlog/> */}

        {/* <Navbar /> */}

        {/* <HealthBlog/> */}
        <br />
         <Searchbar productsList={productsList} setProductsList={setProductsList} />
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
      


      
    </div>
  )
}

export default LandingPage