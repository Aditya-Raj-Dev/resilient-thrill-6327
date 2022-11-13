import React from 'react'
import CartLeft from './CartLeft'
import CartRight from './Cartright'
import "./Card.css"

const Cart = () => {
  return (
        <div className='container'>
            <CartLeft/>
            <CartRight/>
        </div>
  
  )
}

export default Cart