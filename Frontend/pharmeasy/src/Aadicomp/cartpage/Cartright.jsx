import React from 'react'
import "./cartleft.css"
import { FcHome } from 'react-icons/fc';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const CartRight = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/payment");
  };
  const data=useSelector((state)=>state.cartreducer.data)
  const sum = data.reduce(function (result, item) {
    return result + item.mrp;
  }, 0);
  console.log(sum)
  return (
    <div className='aadicart'>
        <div>
          
          {/* Address */}
             <div className='address'>
                <div style={{marginTop:"6px"}}>
                  <FcHome/>
                </div>
                <div>
                  <h3 className='delivery'>Deliver to Home</h3>
                  <h4 className='deliveryadd'>811202  </h4>
                </div>
                <div>
                <h3 className='addchange'>CHANGE</h3>
                </div>
             </div>
             <div className='coupon'>
              <img src="https://assets.pharmeasy.in/web-assets/dist/90a09c2f.svg" />
                <h1 className='applycoupon'>Apply Coupon / View Offers</h1>
             </div>
             <div>
                <Button colorScheme='teal' size='md' width="326px" onClick={()=>handleNavigate()}>
                  Proceed To Buy
                </Button>
             </div>
             <div className='freedelivery'>
             <img src="https://cdn.pharmeasy.in/cms/delivery_image.png" />
                <h1 >Free delivery with cart value above ₹500</h1>
             </div>
           
             <div className='ordersummary'>
             <h1>Order Summary</h1>
              <div className='totalsummary'>
                <div>
                  <p>Cart Value</p>
                  <h4>₹{sum}</h4>
                </div>
                <br />
                 <hr />
                <div>
                  <p>Delivery charges</p>
                  <h4>₹49.00</h4>
                </div>
                <br />
                <hr />
                <div>
                  <p>Amount to be paid</p>
                  <h4>₹{sum+49}</h4>
                </div>
              </div>
             </div>
        </div>
    </div>
  )
}

export default CartRight