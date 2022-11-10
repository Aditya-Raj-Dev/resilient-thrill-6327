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

            //centeredSlides={true}
            // autoplay={{
            //     // delay: 2500,
            //     disableOnInteraction: true,
            // }}
            // pagination={{
            //     clickable: true,
            // }}
            // navigation={false}
            // modules={[Navigation]}
            // className="mySwiper"

            // slidesPerView={1}

            // loop={true}
            // loopFillGroupWithBlank={true}

            slidesPerView={6}
                spaceBetween={10}
                
                loop={true}
                loopFillGroupWithBlank={true}
                
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"


           >


            
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
                <h6>
                MRP ₹{item.mrp}
                </h6>
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