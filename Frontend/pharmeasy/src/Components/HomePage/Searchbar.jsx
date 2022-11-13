import React, { useRef, useState } from 'react'
import { Box, Button, Flex, Image, Input, SimpleGrid, Stack } from '@chakra-ui/react'
import { TbNotes } from 'react-icons/tb'
import "./Searchbar.css"
import { FaGreaterThan } from 'react-icons/fa'
import { useEffect } from 'react'



const Searchbar = ({productsList, setProductsList, setQuery}) => {
    const [ptitle, setPTitle] = useState("")

    const searchProducts=()=>{
        let newList =[];
        if(ptitle){
          const by_title = productsList.filter((item)=>{
            return item.title.toLowerCase().includes(ptitle.trim().toLowerCase()) === true ? true: false;
          })  
          newList=[...by_title];
        }
        
        console.log(newList);
        console.log("prodlist", productsList)
        if(ptitle){
          setProductsList(newList);
        }
      
      }

      useEffect(()=>{
       
        
      },[ ptitle ])

   

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
                   <Input value={ptitle} onChange={(e)=> setPTitle(e.target.value)} colorScheme='teal' width='600px'  border="1px solid black" padding={"1rem"} borderRadius={"2rem"} color={"GrayText"} fontSize={"sm"} placeholder='    Search for Medicine, Health Drinks'   />


                    <Button onClick={searchProducts} borderRadius={"2rem"} colorScheme='teal'>Search</Button>
                    </Flex>
    </div>
  )
}

export default Searchbar



