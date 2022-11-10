import { Box, Button, Flex, Image, Input, SimpleGrid, Stack } from '@chakra-ui/react'
import React from 'react'
import { Link, Navigate } from 'react-router-dom'
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
  } from '@chakra-ui/react'
import DrawerExample from '../../Aadicomp/Login/Login'


const Navbar=() => {
    const [count] = useState(0)
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div position={"fixed"} zIndex="1">
            <SimpleGrid columns={[3, 2, 2, 1]} spacing={10}>
                <Box >
                    <Stack>
                        <Flex justifyContent={"space-between"} padding={"1rem"} gap={"5"}>
                            <Flex gap={"15px"} cursor={"pointer"}>
                                <Link to="/"><Box><Image height='40px' width='140px' src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0" /></Box></Link>
                                <Button variant='ghost' colorScheme='white' gap={"2"}>
                                    <Box fontSize={"sm"}><FaMapMarkerAlt /></Box>
                                    <Box fontSize={"sm"}>Mumbai</Box>
                                </Button>
                            </Flex>
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
                                    <Box fontSize={"sm"}>Cart</Box>
                                </Button>
                            </Flex>
                        </Flex>
                    </Stack>
                    <hr />
                    <br />
                    <Flex justifyContent={"center"} padding={"1rem"} gap={"100"}>
                        <Flex  >

                            <Button variant='ghost' colorScheme='white' gap={"2"}>

                                <Box fontSize={"xl"}>What are you looking for ?</Box>
                            </Button>
                        </Flex>
                        <Flex justifyContent={"space-around"} >

                            <Button variant="ghost" colorScheme='white' gap={"2"}>
                                <Box fontSize={"sm"}><TbNotes /></Box>
                                <Box fontSize={"sm"}>Order with prescription.</Box>
                            </Button>
                            <Button variant='link' colorScheme='teal' gap={"2"}>
                                <Box fontSize={"sm"}>UPLOAD NOW</Box>
                                <Box fontSize={"sm"}><FaGreaterThan /></Box>


                            </Button>
                        </Flex>
                    </Flex>
                    <Flex justifyContent={"center"}>
                    <Input colorScheme='teal' width='600px' padding={"1rem"} borderRadius={"2rem"} color={"GrayText"} fontSize={"sm"} placeholder='Search for Medicine, Health Drinks'   />
                    <Button borderRadius={"2rem"} colorScheme='teal'>Search</Button>
                    </Flex>
                </Box>

            </SimpleGrid>


        </div>
    )
}

export default Navbar