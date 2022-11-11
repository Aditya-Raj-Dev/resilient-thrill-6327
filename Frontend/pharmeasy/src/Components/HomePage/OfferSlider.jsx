import React from 'react'
import { Box, Flex, Image } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../HomePage/style.css";
import "swiper/css/bundle"
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';

const OfferSlider = () => {
    return (
        <Box >
            <Flex justifyContent={"space-between"} p={5} >

                <Swiper

                    centeredSlides={true}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"

                    slidesPerView={3}

                    loop={true}
                    loopFillGroupWithBlank={true}


                    >


                    <SwiperSlide>

                        <Link to="/">
                            <Image style={{ padding: "5px", borderRadius: "10px" }} src="https://cdn01.pharmeasy.in/dam/banner/banner/2691dabe7c0-thyroid.jpg" />

                        </Link>


                    </SwiperSlide>
                    <SwiperSlide>

                        <Link to="/">
                            <Image style={{ padding: "5px", borderRadius: "10px" }} src="https://cdn01.pharmeasy.in/dam/banner/banner/782553ad506-STAR25.jpg" />

                        </Link>


                    </SwiperSlide>
                    <SwiperSlide>

                        <Link to="/">
                            <Image style={{ padding: "5px", borderRadius: "10px" }} src="https://cdn01.pharmeasy.in/dam/banner/banner/59efe8fe01e-634X274.jpg" />
                        </Link>


                    </SwiperSlide>
                    <SwiperSlide>

                        <Link to="/">
                            <Image style={{ padding: "5px", borderRadius: "10px" }} src="https://cdn01.pharmeasy.in/dam/banner/banner/b3a4bdb683b-1.jpg" />
                        </Link>


                    </SwiperSlide>





                </Swiper>
            </Flex>

        </Box>
    )
}

export default OfferSlider