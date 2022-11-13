import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { useEffect } from 'react'
import { GetAllcart } from '../../Redux/CartRedux/cart.action'
import "./Card.css";
import { Select, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";


const CartLeft = () => {
  const dispatch=useDispatch()
  const data=useSelector((state)=>state.cartreducer.data)
  console.log(data)

  useEffect(()=>{
    dispatch(GetAllcart())
  },[])
  return (

        <div className='mainbox'>
              {
                data.map((item)=> (
                  <div className="card">
      <div className="item">
        <img
          src={item.img1}
          alt=""
          className="cardimg"
        />
        <div className="itemd">
          <p className="itemname">{item.title}</p>
          <p>{item.ancestor[1]}</p>
        </div>
        <div>
          <DeleteIcon color="gray" w={5} h={5} />
        </div>
      </div>
      <hr />
      <div className="flex">
        <Select placeholder="Select Quantity" width="200px">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Select>
        <div>
            <div className="flex">
                   <p></p>
                   <s>RS : {item.strike}</s>
            </div>
            <p>RS : { item.mrp}</p>
        </div>
      </div>
    </div>

                ))
              }
        </div>

  )
}

export default CartLeft