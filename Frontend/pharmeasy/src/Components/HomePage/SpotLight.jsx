import React from 'react'
import { Box, Flex, Heading } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../HomePage/style.css";
import "swiper/css/bundle"
import { Navigation } from "swiper";

import { dbdata } from "../../db"
import styles from "./Trending.module.css"

const SpotLight = () => {
    return (
        <Box p={5}>

            <Flex gap={4}>
            <Heading pl={5} textAlign={"start"} size='md' color={"gray.700"}>In the Spotlight</Heading>
            {/* <Button pl={5} textAlign={"start"} size='sm' color={"gray.700"} colorScheme={"yellow"}> 10 Min Left, Hurry!</Button> */}
            </Flex>
            
            <Flex justifyContent={"space-between"} p={5}>

                <Swiper
                    slidesPerView={6}
                    spaceBetween={10}

                    loop={true}
                    loopFillGroupWithBlank={true}

                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper">

                    {dbdata?.in_the_spotlight.map((item) => (
                        <SwiperSlide style={{ gap: "1rem" }}>
                            <div key={item.id} className={styles.card} >
                                <div className={styles.imgdiv}>
                                    <img src={item?.img[0].img} alt={item.id} />
                                </div>

                                <div className={styles.title}>
                                    <h6 className={styles.cardtitle}>
                                        {item.title}
                                    </h6>
                                    {
                                        item.off ? <h6 style={{ color: "gray", fontWeight: "600" }}>
                                            MRP  <span> <s>₹{item.mrp}</s> </span>
                                        </h6> : <h6 style={{ color: "gray", fontWeight: "600" }}>
                                            MRP  ₹{item.mrp}
                                        </h6>
                                    }

                                    {

                                        item.off ? <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}><h6 style={{ fontWeight: "600" }}>₹{(Number(item.mrp) - (Number(item.mrp) * (item.off / 100))).toFixed(2)}</h6>
                                            <h6 style={{ color: "tomato", fontWeight: "600" }}>{item.off} % OFF</h6>
                                        </div> : <h6 style={{ color: "white" }}> 10 </h6>
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

export default SpotLight