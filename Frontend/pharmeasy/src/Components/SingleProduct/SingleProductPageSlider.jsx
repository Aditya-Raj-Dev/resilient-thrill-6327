import { Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Box , Divider } from '@chakra-ui/react';
import styles from "./SingleProductslider.module.css";
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { AiFillStar } from "react-icons/ai";

const SingleProductPageSlider = () => {
  const [product,setProduct]=useState([])
  const param= useParams();


  useEffect(()=>{
    async function getmendata(){
      let r= await axios.get(`http://localhost:8081/product/${param.id}`)
      .then((res)=>{
        let y=  res.data
        setProduct(y)
        console.log(y)
      
      })
     .catch((err)=>{
         console.log(err);
     })
    }
    getmendata()
    },[])


  return (
    <div className={styles.bigbox12}>
        <Flex>
            <Box className={styles.border1}>
               <Box className={styles.bordercolor}>
                     feg
               </Box>
               <Flex className={styles.smallboxflex}>
                 <Box className={styles.smallbox}></Box>
                 <Box className={styles.smallbox}></Box>
                 <Box className={styles.smallbox}></Box>
               </Flex>
            </Box>
            <Box className={styles.sideinfo}>
                <h2 >Dettol Antiseptic Liquid Bottle Of 550 Ml</h2>
                 <Flex><AiFillStar className={styles.starbig} />
                 <AiFillStar className={styles.starbig} />
                 <AiFillStar className={styles.starbig} />
                 <AiFillStar className={styles.starbig} />
                 <AiFillStar className={styles.starbig} />
                 <p className={styles.upsidehea}>(1220 ratings)</p></Flex>
              <Flex gap={"300px"}>
              <h3>$207</h3>
              
              <button className={styles.addtocart}>Add To Cart</button>
              </Flex>

              <h6 className={styles.deliverys}>Delivery by Tomorrow, before 10:00 pm</h6>
              <hr />
            </Box>
        </Flex>
        <hr />
        <h4 className={styles.similarp}>        Similar Products</h4>
        <Flex className={styles.gapinbox}>
            <Box className={styles.fourbox}>
                <Box className={styles.lineborder}>
                <img className={styles.imgsmall} src="https://cdn01.pharmeasy.in/dam/products_otc/P68228/liveasy-wellness-burns-cream-20gm-1-1655462781.jpg" alt="" />

                </Box>
               <h3 className={styles.lightbold}>Liveasy Wellness Burns Cream Tube Of 20gm
Liveasy...</h3>
<p  className={styles.textpara}>
   20g Cream in Tube
</p>
<h6 className={styles.mrpdark}>MRP $80</h6>
<button className={styles.addbutton}>Add</button>
            </Box>
            <Box className={styles.fourbox}>
                <Box className={styles.lineborder}>
                <img className={styles.imgsmallbox} src="https://cdn01.pharmeasy.in/dam/products_otc/G19614/liveasy-essentials-adhesive-bandages-box-of-100-1-1641791579.jpg" alt="" />

                </Box>
               <h3 className={styles.lightbold}>Liveasy Wellness Burns Cream Tube Of 20gm
Liveasy...</h3>
<p  className={styles.textpara}>
   20g Cream in Tube
</p>
<h6 className={styles.mrpdark}>MRP $80</h6>
<button className={styles.addbutton}>Add</button>

            </Box>
            <Box className={styles.fourbox}>
                <Box className={styles.lineborder}>
                <img className={styles.imgsmallboxsmall} src="https://cdn01.pharmeasy.in/dam/products_otc/Y63373/candid-dusting-powder-120-gm-2-1655118930.jpg" alt="" />

                </Box>
               <h3 className={styles.lightbold}>Liveasy Wellness Burns Cream Tube Of 20gm
Liveasy...</h3>
<p  className={styles.textpara}>
   20g Cream in Tube
</p>
<h6 className={styles.mrpdark}>MRP $80</h6>
<button className={styles.addbutton}>Add</button>

            </Box>
            <Box className={styles.fourbox}>
                <Box className={styles.lineborder}>
                <img className={styles.imgsmallboxsmall} src="https://cdn01.pharmeasy.in/dam/products_otc/I05057/dettol-liquid-handwash-refill-original-germ-protection-hand-wash-750-ml-2-1641787745.jpg" alt="" />

                </Box>
               <h3 className={styles.lightbold}>Liveasy Wellness Burns Cream Tube Of 20gm
Liveasy...</h3>
<p  className={styles.textpara}>
   20g Cream in Tube
</p>
<h6 className={styles.mrpdark}>MRP $80</h6>
<button className={styles.addbutton}>Add</button>

            </Box>
            <Box className={styles.fourbox}>
                <Box className={styles.lineborder}>
                <img className={styles.imgsmall} src="https://cdn01.pharmeasy.in/dam/products_otc/P68228/liveasy-wellness-burns-cream-20gm-1-1655462781.jpg" alt="" />

                </Box>
               <h3 className={styles.lightbold}>Liveasy Wellness Burns Cream Tube Of 20gm
Liveasy...</h3>
<p  className={styles.textpara}>
   20g Cream in Tube
</p>
<h6 className={styles.mrpdark}>MRP $80</h6>
<button className={styles.addbutton}>Add</button>

            </Box>
        </Flex>
       <hr className={styles.linehr} />
       <h4 className={styles.slideheading}>Frequently Bought Together</h4>
       <Flex className={styles.gapinbox1}>
            <Box className={styles.fourbox}>
                <Box className={styles.lineborder}>
                <img className={styles.imgsmall} src="https://cdn01.pharmeasy.in/dam/products_otc/P68228/liveasy-wellness-burns-cream-20gm-1-1655462781.jpg" alt="" />

                </Box>
               <h3 className={styles.lightbold}>Liveasy Wellness Burns Cream Tube Of 20gm
Liveasy...</h3>
<p  className={styles.textpara}>
   20g Cream in Tube
</p>
<h6 className={styles.mrpdark}>MRP $80</h6>
<button className={styles.addbutton}>Add</button>
            </Box>
            <Box className={styles.fourbox}>
                <Box className={styles.lineborder}>
                <img className={styles.imgsmallbox} src="https://cdn01.pharmeasy.in/dam/products_otc/G19614/liveasy-essentials-adhesive-bandages-box-of-100-1-1641791579.jpg" alt="" />

                </Box>
               <h3 className={styles.lightbold}>Liveasy Wellness Burns Cream Tube Of 20gm
Liveasy...</h3>
<p  className={styles.textpara}>
   20g Cream in Tube
</p>
<h6 className={styles.mrpdark}>MRP $80</h6>
<button className={styles.addbutton}>Add</button>

            </Box>
            <Box className={styles.fourbox}>
                <Box className={styles.lineborder}>
                <img className={styles.imgsmallboxsmall} src="https://cdn01.pharmeasy.in/dam/products_otc/Y63373/candid-dusting-powder-120-gm-2-1655118930.jpg" alt="" />

                </Box>
               <h3 className={styles.lightbold}>Liveasy Wellness Burns Cream Tube Of 20gm
Liveasy...</h3>
<p  className={styles.textpara}>
   20g Cream in Tube
</p>
<h6 className={styles.mrpdark}>MRP $80</h6>
<button className={styles.addbutton}>Add</button>

            </Box>
            <Box className={styles.fourbox}>
                <Box className={styles.lineborder}>
                <img className={styles.imgsmallboxsmall} src="https://cdn01.pharmeasy.in/dam/products_otc/I05057/dettol-liquid-handwash-refill-original-germ-protection-hand-wash-750-ml-2-1641787745.jpg" alt="" />

                </Box>
               <h3 className={styles.lightbold}>Liveasy Wellness Burns Cream Tube Of 20gm
Liveasy...</h3>
<p  className={styles.textpara}>
   20g Cream in Tube
</p>
<h6 className={styles.mrpdark}>MRP $80</h6>
<button className={styles.addbutton}>Add</button>

            </Box>
            <Box className={styles.fourbox}>
                <Box className={styles.lineborder}>
                <img className={styles.imgsmall} src="https://cdn01.pharmeasy.in/dam/products_otc/P68228/liveasy-wellness-burns-cream-20gm-1-1655462781.jpg" alt="" />

                </Box>
               <h3 className={styles.lightbold}>Liveasy Wellness Burns Cream Tube Of 20gm
Liveasy...</h3>
<p  className={styles.textpara}>
   20g Cream in Tube
</p>
<h6 className={styles.mrpdark}>MRP $80</h6>
<button className={styles.addbutton}>Add</button>

            </Box>
        </Flex>

    </div>
  )
}

export default SingleProductPageSlider