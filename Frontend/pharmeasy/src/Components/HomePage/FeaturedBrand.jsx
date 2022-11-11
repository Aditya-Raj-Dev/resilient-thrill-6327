import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../HomePage/style.css";
import "swiper/css/bundle"
import { Navigation } from "swiper";
import styles from "./ShopByCategory.module.css"

import { dbdata } from "../../db"

const FeaturedBrand = () => {
  return (
    <Box p={5} >
            <Heading pl={5} textAlign={"start"} size='md' color={"gray.700"}>Featured Brands</Heading>
            <Text pl={5} textAlign={"start"} size='sm' color={"gray.700"}>Pick from our favourite brands</Text>
            <Flex justifyContent={"space-between"} p={5}>

                <Swiper
                    slidesPerView={6}
                    spaceBetween={10}

                    loop={true}
                    loopFillGroupWithBlank={true}

                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper">

                    {dbdata?.featured_brands.map((item) => (
                        <SwiperSlide style={{ gap: "0.2rem" }}>
                            <div key={item.id} className={styles.card} >
                                <div className={styles.imgdiv}>
                                    <img src={item?.img} alt={item.id} />
                                </div>

                                <div className={styles.title}>
                                    <h6 className={styles.cardtitle}>
                                        {item.title}
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

export default FeaturedBrand