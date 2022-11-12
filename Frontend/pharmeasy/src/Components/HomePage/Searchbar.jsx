import React from 'react'
import { Box, Button, Flex, Image, Input, SimpleGrid, Stack } from '@chakra-ui/react'
import { TbNotes } from 'react-icons/tb'
import "./Searchbar.css"
import { FaGreaterThan, FaMapMarkerAlt, FaMobileAlt, FaShoppingCart, FaUserAlt } from 'react-icons/fa'
const Searchbar = () => {
  return (
    <div>
        <Flex justifyContent={"center"} padding={"1rem"} gap={"100"}>
                        <Flex  >

                            <Button variant='ghost' colorScheme='white' gap={"2"}>

                                <Box fontSize={"xl"}>What are you looking for ?</Box>
                            </Button>
                        </Flex>
                        <Flex justifyContent={"space-around"} >

                            <Button variant="ghost" colorScheme='white' gap={"2"}>
                                <Box fontSize={"sm"}><TbNotes  /></Box>
                                <Box fontSize={"sm"}>Order with prescription.</Box>
                            </Button>
                            <Button variant='link' colorScheme='teal' gap={"2"}>
                                <Box fontSize={"sm"}>UPLOAD NOW</Box>
                                <Box fontSize={"sm"}><FaGreaterThan  fontSize="10px"/></Box>


                            </Button>
                        </Flex>
                    </Flex>
                    <Flex justifyContent={"center"} className="searchbar">
                    <Input colorScheme='teal' width='600px'  border="1px solid black" padding={"1rem"} borderRadius={"2rem"} color={"GrayText"} fontSize={"sm"} placeholder='    Search for Medicine, Health Drinks'   />
                    <Button borderRadius={"2rem"} colorScheme='teal'>Search</Button>
                    </Flex>
    </div>
  )
}

export default Searchbar