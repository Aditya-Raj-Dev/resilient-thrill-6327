import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../HomePage/style.css";
import "swiper/css/bundle"
import { Navigation } from "swiper";

import { dbdata } from "../../db"
import styles from "./NewLaunches.module.css"

const Trending = () => {
    return (
        <Box p={5} >
            <Heading p={5} textAlign={"start"} size='md' color={"gray.700"}>Trending Near You</Heading>
            <Text pl={5} textAlign={"start"} size='sm' color={"gray.700"}>Popular in your city</Text>
            <Flex justifyContent={"space-between"} p={5}>

                <Swiper
                    slidesPerView={6}
                    spaceBetween={10}

                    loop={true}
                    loopFillGroupWithBlank={true}

                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper">

                    {dbdata?.trending_near_you.map((item) => (
                        <SwiperSlide style={{ gap: "1rem" }}>
                            <div key={item.id} className={styles.card} >
                                <div className={styles.imgdiv}>
                                    <img src={item?.img[0].img} alt={item.id} />
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

export default Trending