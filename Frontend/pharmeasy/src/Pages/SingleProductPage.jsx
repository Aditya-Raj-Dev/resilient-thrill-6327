import React from "react";
import { useState } from "react";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import {
  Box,
  Grid,
  Heading,
  Image,
  Text,
  ListItem,
  Flex,
  UnorderedList,
  Divider,
  Stack,
  Button
} from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./SingleProductPage.module.css";
import { useParams ,useNavigate} from "react-router-dom";


import SingleProductPageSlider from "../Components/SingleProduct/SingleProductPageSlider";

const SingleProductPage = () => {
  const navigate = useNavigate();
 
  const handleViewCart = () => {
    navigate("/cart");
  };

  return (
    <>
    <Flex>
    <SingleProductPageSlider />
    <Box className={styles.main_div4}>
              <p style={{ fontWeight: "bold" }}>Items in Cart</p>

              <Stack
                spacing={4}
                direction="row"
                align="center"
                marginTop="1rem"
                marginBottom="4rem"
              >
                <Button
                  onClick={handleViewCart}
                  colorScheme="teal"
                  size="lg"
                  width="20rem"
                >
                  View Cart{" "}
                  <IoIosArrowForward
                    style={{ marginLeft: "1.5rem", width: "4vh" }}
                  />
                </Button>
              </Stack>

              <div className={styles.offerdiv}>
                <p style={{ fontWeight: "bold" }}>Offers just for you</p>
                <div
                  style={{ display: "flex", marginTop: "1rem", gap: "10px" }}
                >
                  <img
                    src="https://cms-contents.pharmeasy.in/offer/60165886431-ten_per.jpg"
                    alt=""
                  />
                  <p>
                    Get extra 10% Off on Everherb, Liveasy
                    <br />
                    PharmEasy products
                  </p>
                </div>
                <div
                  style={{ display: "flex", marginTop: "1rem", gap: "10px" }}
                >
                  <img
                    src="https://cms-contents.pharmeasy.in/offer/94fa2133c15-Plum_logo2.jpg"
                    alt=""
                  />
                  <p>Get Flat 50% off on Plum</p>
                </div>
              </div>
            </Box>
    </Flex>
      
    
        <Divider />
      <Box w={"60%"} m="auto" mb={"2rem"} >
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <Box w="100%" h="16rem" bg="white">
            <Image
              src="https://uploads-ssl.webflow.com/598435743262c800013158eb/5fccdb2bbb42677c2f3efa4e_moneyback-icon-green.svg"
              w="20%"
              h="20%"
              alt="Dan Abramov"
            />
            <Heading as="h4" size="md" mt="1rem" mr="12.5rem">
              1 Lakh+ Products
            </Heading>
            <Text fontSize={"lg"} textAlign="left" mt="1rem" color={"gray"}>
              We maintain strict quality controls on all our partner retailers,
              so that you always get standard quality products.
            </Text>
          </Box>
          <Box w="100%" h="16rem" bg="white">
            <Image
              borderRadius={"21rem"}
              src="https://www.datocms-assets.com/22250/1583380060-shield-lock-2x.png?auto=format&dpr=0.8&w=244"
              w="20%"
              h="20%"
              mt={"0.5rem"}
              alt="Dan Abramov"
            />
            <Heading as="h4" size="md" mt="1rem"  mr="7.5rem">
              Secure Payment
            </Heading>
            <Text fontSize={"lg"} textAlign="left" mt="1rem" color={"gray"}>
              100% secure and trusted payment protection.
            </Text>
          </Box>
          <Box w="100%" h="16rem" bg="white">
            <Image
              borderRadius={"21rem"}
              src="https://i.pinimg.com/564x/31/55/64/315564aece0f76bde01696ce11b8f47f.jpg"
              w="20%"
              h="20%"
              mt={"0.5rem"}
              alt="Dan Abramov"
            />
            <Heading as="h4" size="md" mt="1rem"  mr="12.5rem">
              Easy Return{" "}
            </Heading>
            <Text fontSize={"lg"} textAlign="left" mt="1rem" color={"gray"}>
              We have a new and dynamic return window policy for medicines and
              healthcare items. Refer FAQs section for more details.
            </Text>
          </Box>
        </Grid>
      </Box>
      <Divider mb={"5rem"} />
      <Box w={"70%"} m="auto">
        <Grid templateColumns="repeat(3, 1fr)" gap={8}>
          <Box w="80%" h="33rem" ml="1rem" bg="white">
            <Image
              w="80%"
              h="80%"
              src="https://assets.pharmeasy.in/web-assets/_next/icons/footerMobile.jpg"
            />
          </Box>
          <Box w="100%" h="22rem" bg="white">
            <Text fontSize={"xl"} textAlign="left" mt="1rem" ml={"1rem"}>
              Download the App for Free
            </Text>
            <a href="https://play.google.com/store/apps/details?id=com.phonegap.rxpal&hl=en_IN&gl=US&utm_source=web&utm_medium=footer">
              <Image src="https://www.idfcfirstbank.com/content/dam/IDFCFirstBank/android-store-icon.svg" />
            </a>
            <a href="https://apps.apple.com/in/app/pharmeasy-healthcare-app/id982432643">
              <Image src="https://www.idfcfirstbank.com/content/dam/IDFCFirstBank/apple-store-icon.svg" />
            </a>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default SingleProductPage;
