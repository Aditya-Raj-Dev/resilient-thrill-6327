import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { useEffect } from 'react'
import { GetAllcart } from '../../Redux/CartRedux/cart.action'

const CartLeft = () => {
  const dispatch=useDispatch()
  const data=useSelector((state)=>state.cartreducer.data)
  console.log(data)

  useEffect(()=>{
    dispatch(GetAllcart())
  },[])
  return (
    <div>
        <div>
              {
                data.map((item)=> (
                   <div>
                      
                      <div>{item.title}</div>
                      <div></div>
                   </div>
                ))
              }
        </div>
    </div>
  )
}

export default CartLeft