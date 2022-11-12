import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../HomePage/style.css";
import "swiper/css/bundle"
import { Navigation } from "swiper";

import {dbdata} from "../../db"
import styles from "./NewLaunches.module.css"

const NewLaunches = () => {
  return (
    <Box p={5} >
        <Heading p={5} textAlign={"start"} size='md' color={"gray.700"}>New Launches</Heading>
        <Text pl={5} textAlign={"start"} size='sm' color={"gray.700"}>New wellness range just for you!</Text>
    <Flex justifyContent={"space-between"} p={5}>

        <Swiper
            slidesPerView={6}
                spaceBetween={10}
                
                loop={true}
                loopFillGroupWithBlank={true}
                
                navigation={true}
                modules={[Navigation]}
                className="mySwiper">

                {dbdata?.new_launches.map((item)=>(
                    <SwiperSlide style={{gap:"1rem"}}>
                    <div key={item.id} className={styles.card} >
                    <div className={styles.imgdiv}>
                    <img  src={item?.img[0].img} alt={item.id} />
                    </div>
                    
                <div className={styles.title}>
                <h6 className={styles.cardtitle}>
                    {item.title}
                </h6>
               {
                item.off ?  <h6 style={{color:"gray", fontWeight:"600"}}>
                MRP  <span> <s>₹{item.mrp}</s> </span> 
                </h6> :  <h6 style={{color:"gray", fontWeight:"600"}}>
                MRP  ₹{item.mrp}
                </h6>
               }
                {/* <h6>
                MRP  ₹{item.mrp}
                </h6> */}
                { 
                
                    item.off ? <div style={{display:"flex", gap:"1rem", justifyContent:"center"}}><h6 style={{ fontWeight:"600"}}>₹{ (Number(item.mrp) - (Number(item.mrp) * (item.off / 100))).toFixed(2)}</h6>
                    <h6 style={{color:"tomato" , fontWeight:"600"}}>{item.off} % OFF</h6>
                    </div> : <h6 style={{color:"white"}}> 10 </h6> 
                }
                </div>
                
                
            </div>

            </SwiperSlide>
                ))}
                
                
            
            </Swiper>
            </Flex>
            </Box>
  )
}

export default NewLaunches