import React from "react";
import { Box, Center, Container, Flex, Image, Link, Spacer } from "@chakra-ui/react";
import styles from '../styles/blog.module.css'
import {FaAngleDown} from 'react-icons/fa';
import BlogBox from "../Components/Blog/BlogBox";


export const HealthBlog = () => {
  return (
    <div>
    <div>
      <Box bg="pharma" w="100%" py="2" color="#12926F">
        <Container fontSize='13px' maxW='65%'>
          <Flex gap="4">
            <Link  color='white'>
              Order Medicines
            </Link>
            
            <Link color='white'>
              Order Healthcare Products
            </Link>
            
            <Link  color='white'>
              Book Dioagnostic Tests
            </Link>
          </Flex>
        </Container>
      </Box>

      <Box bg='FFFFFF' w="100%" pt="8" >
        <center>
          <img  src="https://blog-images.pharmeasy.in/2018/02/15101755/Logo-1.png" alt="" />
        </center>
      </Box>
      <hr/>
      <Box py="2" w="100%">
        <Container maxW='65%' centerContent>
            <div className={styles.nav}>
              <div className={styles.nav_tab}>Chronic Ailments <FaAngleDown/> </div>
              <div className={styles.nav_tab}>Home Remedies</div>
              <div className={styles.nav_tab}>Lifestyle <FaAngleDown/> </div>
              <div className={styles.nav_tab}>Wellness <FaAngleDown/> </div>
              <div className={styles.nav_tab}>Health Today <FaAngleDown/> </div>
              <div className={styles.nav_tab}>Founders Desk</div>
              <div className={styles.nav_tab}>Shop</div>
              <div className={styles.nav_tab}>xx</div>
            </div>
         
        </Container>
      </Box>
    <hr/>
    </div>
    
    <div>
      <div className={styles.leftcontainer}>
        <BlogBox/>
        <BlogBox/>
        <BlogBox/>
      </div>
      <div className={styles.rightcontainer}>

      </div>
    </div>


    </div>
  );
};
