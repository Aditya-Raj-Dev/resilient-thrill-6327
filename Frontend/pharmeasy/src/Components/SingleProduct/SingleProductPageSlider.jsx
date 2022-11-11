import { Flex } from '@chakra-ui/react'
import React from 'react';
import { Box , Divider } from '@chakra-ui/react';
import styles from "./SingleProductslider.module.css"

const SingleProductPageSlider = () => {
  return (
    <div>
        <Flex>
            <Box className={styles.border1}>
               <Box className={styles.bordercolor}>
                     feg
               </Box>
               <Flex className={styles.smallboxflex}>
                 <Box className={styles.smallbox}></Box>
                 <Box className={styles.smallbox}></Box>
                 <Box className={styles.smallbox}></Box>
               </Flex>
            </Box>
            <Box>

            </Box>
        </Flex>
       <Divider></Divider>
        <Flex>
            <Box className={styles.fourbox}></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
        </Flex>

    </div>
  )
}

export default SingleProductPageSlider