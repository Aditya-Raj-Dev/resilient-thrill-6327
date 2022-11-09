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
        <Box h={"200px"}>
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


                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}>


                <SwiperSlide>
                    <Box border={"1px solid green"} w={"100px"} h={"100px"}>
                        
                            <Image w={"80px"} h={"60px"} src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0" />
                        
                        <Heading as='h4' size='sm'>
                            Medicine
                        </Heading>
                        <Heading as='h4' size='sm' color={"red"}>
                            UPTO 20% OFF
                        </Heading>
                    </Box>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <Box border={"1px solid green"} w={"100px"} h={"100px"}>
                        <Link to="/">
                            <Image w={"80px"} h={"60px"} src="https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=720x0" />
                        </Link>
                        <Heading as='h4' size='sm'>
                            Lab Tests
                        </Heading>
                        <Heading as='h4' size='sm' color={"red"}>
                            UPTO 70% OFF
                        </Heading>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box border={"1px solid green"} w={"100px"} h={"100px"}>
                        <Link to="/">
                            <Image w={"80px"} h={"60px"} src="https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=720x0" />
                        </Link>
                        <Heading as='h4' size='sm'>
                            Healthcare
                        </Heading>
                        <Heading as='h4' size='sm' color={"red"}>
                            UPTO 60% OFF
                        </Heading>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box border={"1px solid green"} w={"100px"} h={"100px"}>
                        <Link to="/">
                            <Image w={"80px"} h={"60px"} src="https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=720x0" />
                        </Link>
                        <Heading as='h4' size='sm'>
                            Plus
                        </Heading>
                        <Heading as='h4' size='sm' color={"red"}>
                            SAVE 5% EXTRA
                        </Heading>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box border={"1px solid green"} w={"100px"} h={"100px"}>
                        <Link to="/">
                            <Image w={"80px"} h={"60px"} src="https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=720x0" />
                        </Link>
                        <Heading as='h4' size='sm'>
                            Offers
                        </Heading>
                        
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box border={"1px solid green"} w={"100px"} h={"100px"}>
                        <Link to="/">
                            <Image w={"80px"} h={"60px"} src="https://assets.pharmeasy.in/apothecary/images/offers_1_ff.webp?dim=720x0" />
                        </Link>
                        <Heading as='h4' size='sm'>
                            Surgiries
                        </Heading>
                        
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box border={"1px solid green"} w={"100px"} h={"100px"}>
                        <Link to="/">
                            <Image w={"80px"} h={"60px"} src="https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=720x0" />
                        </Link>
                        <Heading as='h4' size='sm'>
                            Healthcare
                        </Heading>
                        <Heading as='h4' size='sm' color={"red"}>
                            UPTO 60% OFF
                        </Heading>
                    </Box>
                </SwiperSlide>
                



            </Swiper>
        </Flex>
        </Box>

    )
}

export default CatSlider