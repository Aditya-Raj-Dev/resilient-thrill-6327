import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import "./Product.css"


const ProductCat = () => {
    const [data,setData]=useState([])
    const getData=()=>{
        axios.get("https://easy-ruby-peacock-hose.cyclic.app/api/products")
        .then((r)=>{
            console.log(r.data)
            setData(r.data)
        })
        .catch((e)=>{
            console.log(e)
        })
    }
    useEffect(()=>{
        getData()
    },[])

  return (
    <div className='mainproduct'>
        {
            data.map((item)=>(
                <div key={item.id}className="productdiv">
                    <img src={item.img1} alt="" />
                    <h1>{item.title}</h1>
                    <div style={{display:"flex",justifyContent:"space-around",marginRight:"2rem"}}>
                    <h2>MRP ₹<s>{item.strike}</s></h2>
                    <h3>{item.discount}%off</h3>
                    </div>
                    <h4>₹{item.mrp}</h4>
                </div>    
            ))
        }
        
        
    </div>
  )
}

export default ProductCat