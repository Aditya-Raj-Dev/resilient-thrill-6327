import React, { useEffect, useState } from 'react'
import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../HomePage/style.css";
import "swiper/css/bundle"
import { Autoplay, Pagination, Navigation } from "swiper";
//import { Link } from 'react-router-dom';
import {dbdata} from "../../db"
import styles from "./ShopByCategory.module.css"

console.log("dbdata", dbdata)
 
const ShopByCategory = () => {


   

  return (
    <Box p={5} >
        <Heading p={5} textAlign={"start"} size='md' color={"gray.700"}>Shop by Categories</Heading>
    <Flex justifyContent={"space-between"} p={5}>

        <Swiper

            centeredSlides={true}
            autoplay={{
                // delay: 2500,
                disableOnInteraction: false,
            }}
            // pagination={{
            //     clickable: true,
            // }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"

            slidesPerView={1}

            loop={true}
            loopFillGroupWithBlank={true}


           >


            <SwiperSlide style={{gap:"1rem"}}>
                {dbdata?.shop_by_categories.map((item)=>(
                    <div key={item.id} className={styles.card} >
                    <div className={styles.imgdiv}>
                    <img  src={item?.img} alt={item.id} />
                    </div>
                    
                
                <h5 className={styles.cardtitle}>
                    {item.title}
                </h5>
                
            </div>

                
                ))}
                
                
            </SwiperSlide>
            {/* <SwiperSlide>
                <Box  >
                    <Link to="/">
                        <Image  src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/1e622b0308ec3ab48887512eaa3488a5.png?f=png?dim=256x0" />
                    </Link>
                    <Heading  size='xs'>
                        Personal Care
                    </Heading>
                    
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box  >
                    <Link to="/">
                        <Image  src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/cfc8ee511609321e91eb86a34f5b2885.png?f=png?dim=256x0" />
                    </Link>
                    <Heading  size='xs'>
                        Healthcare Devices
                    </Heading>
                    
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box  >
                    <Link to="/">
                        <Image  src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/335dae76832d370c94f0440f5ba89e1f.png?f=png?dim=256x0" />
                    </Link>
                    <Heading  size='xs'>
                        Healts food and drinks
                    </Heading>
                    
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box  >
                    <Link to="/">
                        <Image  src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/403b8ada7b113c7cb2e8d09e3420edfa.png?f=png?dim=256x0" />
                    </Link>
                    <Heading  size='xs'>
                        Beauty
                    </Heading>
                    
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box  >
                    <Link to="/">
                        <Image  src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/fa936f30b4563fc4abd187fb22fe5258.png?f=png?dim=256x0" />
                    </Link>
                    <Heading  size='xs'>
                        Elderly Care
                    </Heading>
                    
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box  >
                    <Link to="/">
                        <Image  src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/dc96175686f135b5a22d1e57165d0246.png?f=png?dim=256x0" />
                    </Link>
                    <Heading  size='xs'>
                        Homecare
                    </Heading>
                    
                </Box>
            </SwiperSlide> */}
            



        </Swiper>
    </Flex>
    
    </Box>
  )
}

export default ShopByCategory