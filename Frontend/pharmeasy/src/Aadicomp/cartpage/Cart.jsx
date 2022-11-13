import React from 'react'
import CartLeft from './CartLeft'
import CartRight from './Cartright'

const Cart = () => {
  return (
    <div>
      <br />
      <br />
      <br />
        <div style={{display:"flex"}}>
            <CartLeft/>
            {/* <CartRight/> */}
        </div>
    </div>
  )
}

export default Cart