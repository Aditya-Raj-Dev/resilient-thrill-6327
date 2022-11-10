import React from 'react'
import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../HomePage/style.css";
import "swiper/css/bundle"
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';

const CatSlider = () => {
    return (
        <Box p={5}>
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

                slidesPerView={8}

                loop={true}
                loopFillGroupWithBlank={true}


               >


                <SwiperSlide>
                    <Box  >
                        
                            <Image  src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0" />
                        
                        <Heading  size='xs'>
                            Medicine
                        </Heading>
                        <Heading  size='xs' color={"red"}>
                            UPTO 20% OFF
                        </Heading>
                    </Box>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <Box  >
                        <Link to="/">
                            <Image  src="https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=720x0" />
                        </Link>
                        <Heading  size='xs'>
                            Lab Tests
                        </Heading>
                        <Heading  size='xs' color={"red"}>
                            UPTO 70% OFF
                        </Heading>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box  >
                        <Link to="/">
                            <Image  src="https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=720x0" />
                        </Link>
                        <Heading  size='xs'>
                            Healthcare
                        </Heading>
                        <Heading  size='xs' color={"red"}>
                            UPTO 60% OFF
                        </Heading>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box  >
                        <Link to="/">
                            <Image  src="https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=720x0" />
                        </Link>
                        <Heading  size='xs'>
                            Plus
                        </Heading>
                        <Heading  size='xs' color={"red"}>
                            SAVE 5% EXTRA
                        </Heading>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box  >
                        <Link to="/">
                            <Image  src="https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=720x0" />
                        </Link>
                        <Heading  size='xs'>
                            Offers
                        </Heading>
                        
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box  >
                        <Link to="/">
                            <Image  src="https://assets.pharmeasy.in/apothecary/images/offers_1_ff.webp?dim=720x0" />
                        </Link>
                        <Heading  size='xs'>
                            Surgiries
                        </Heading>
                        
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box  >
                        <Link to="/">
                            <Image  src="https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=720x0" />
                        </Link>
                        <Heading  size='xs'>
                            Value Store
                        </Heading>
                        <Heading  size='xs' color={"red"}>
                            UPTO 50% OFF
                        </Heading>
                    </Box>
                </SwiperSlide>
                



            </Swiper>
        </Flex>

        </Box>

    )
}

export default CatSlider