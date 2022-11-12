import React from 'react'
import ProductCat from '../Components/ProductCat/ProductCat'
import { Heading } from '@chakra-ui/react'

const Product = () => {
  return (
    <div> 
        <Heading as='h3' size='lg'>
    Products
     </Heading>
     <br/>
     <br/>
      <ProductCat/>
    </div>
  )
}

export default Product