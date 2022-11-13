import { Box, Button, Flex, Image, Input, SimpleGrid, Stack } from '@chakra-ui/react'
import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { FaGreaterThan, FaMapMarkerAlt, FaMobileAlt, FaShoppingCart, FaUserAlt } from 'react-icons/fa'
import { CiPercent } from 'react-icons/ci'
import { TbNotes } from 'react-icons/tb'
import { useState } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    DrawerCloseButton,
    Spacer
  } from '@chakra-ui/react'
import DrawerExample from '../../Aadicomp/Login/Login'
import Searchbar from './Searchbar'


const Navbar=() => {
    const [count] = useState(0)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate();

    function gotocart(){
         navigate("/cart")
    }

    return (
        <div position={"fixed"} zIndex="1">
            <SimpleGrid columns={[3, 2, 2, 1]} spacing={10}>
                <Box >
                <Stack >
                    <Box position={"fixed"} w={"100%"} style={{zIndex:"1"}} >
                        <Flex justifyContent={"space-between"} padding={"1rem"} gap={"5"} >
                            <Flex gap={"15px"} cursor={"pointer"}>
                                <Link to="/"><Box><Image height='40px' width='140px' src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0" /></Box></Link>
                                <Button variant='ghost' colorScheme='white' gap={"2"}>
                                    <Box fontSize={"sm"}><FaMapMarkerAlt /></Box>
                                    <Box fontSize={"sm"}>Mumbai</Box>
                                </Button>
                            </Flex>
                            <Spacer />
                            <Flex justifyContent={"space-around"} gap={"5"}>
                                <a href="https://apps.apple.com/IN/app/id982432643?mt=8"><Button colorScheme='gray' gap={"2"}>
                                    <Box fontSize={"sm"}><FaMobileAlt /></Box>
                                    <Box fontSize={"sm"}>Download</Box>
                                </Button></a>
                                <Button variant="link" colorScheme='white' >
                                    <Box fontSize={"sm"}><FaUserAlt /></Box>
                                   <Box fontSize={"sm"} ><DrawerExample/></Box>
                                </Button>
                                <Button variant="ghost" colorScheme='white' gap={"2"}>
                                    <Box fontSize={"sm"}><CiPercent /></Box>
                                    <Box fontSize={"sm"}>Offers</Box>
                                </Button>
                                <Button variant='ghost' colorScheme='white' gap={"2"}>
                                    <Box fontSize={"sm"}><FaShoppingCart /></Box>
                                    <Box fontSize='xs'>{count} </Box>
                                    <Box onClick={gotocart} fontSize={"sm"}>Cart</Box>
                                </Button>
                            </Flex>
                        </Flex>
                        
                    </Box>
                    </Stack>
                    <hr />
                    <br />
                </Box>

            </SimpleGrid>


        </div>
    )
}

export default Navbar