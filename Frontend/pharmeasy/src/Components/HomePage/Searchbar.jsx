import React, { useState } from 'react'
import { Box, Button, Flex, Image, Input, SimpleGrid, Stack } from '@chakra-ui/react'
import { TbNotes } from 'react-icons/tb'
import "./Searchbar.css"
import { FaGreaterThan, FaMapMarkerAlt, FaMobileAlt, FaShoppingCart, FaUserAlt } from 'react-icons/fa'

const Searchbar = ({products, setCardsList}) => {
    const [title, setTitle] = useState("")

    const searchProducts=()=>{
        let newList =[];
        if(title){
          const by_title = products.filter((card)=>{
            return card.position.toLowerCase().includes(title.trim().toLowerCase()) === true ? true: false;
          })  
          newList=[...by_title];
        }
        
        // console.log(newList);
        if(title){
          setCardsList(newList);
        }
      
      }
    

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
                    <Input value={title} onChange={(e)=>setTitle(e.target.value)} colorScheme='teal' width='600px'  border="1px solid black" padding={"1rem"} borderRadius={"2rem"} color={"GrayText"} fontSize={"sm"} placeholder='    Search for Medicine, Health Drinks'   />
                    <Button onClick={searchProducts} borderRadius={"2rem"} colorScheme='teal'>Search</Button>
                    </Flex>
    </div>
  )
}

export default Searchbar

// import React, { useEffect, useState } from 'react'
// import styled from 'styled-components'
// import {BiSearch} from 'react-icons/bi'
// import {MdLocationPin} from 'react-icons/md'
// import axios from 'axios';
// // import { getSuggestedQuery } from '@testing-library/react'


// export const SearchBar = ({cardsList, setCardsList}) => {
//     const [title, setTitle] = useState("");
//   const [location, setLocation] = useState("");
  
  
//   const handle_searchJobs=()=>{
//     let newList =[];
//     if(title){
//       const by_title = cardsList.filter((card)=>{
//         return card.position.toLowerCase().includes(title.trim().toLowerCase()) === true ? true: false
//       })  
//       newList=[...by_title];
//     }
//     if(location){
//       const by_location = cardsList.filter((card)=>{
//         return card.address.toLowerCase().includes(location.trim().toLowerCase()) === true ? true: false
//       })  
      
//       newList=[...newList, ...by_location];
//     }
//     // console.log(newList);
//     if(title || location){
//       setCardsList(newList);
//     }
  
//   }

//   useEffect(()=>{
    
//   },[title, location ]);

//   return (
//     <SEARCHBAR_CONTAINER>
//         <SEARCHBAR_CONTAINER_WRAPPER>
//           <h4>What</h4>
//           <div><input type='text' placeholder='Job title, keywords, or company' value={title} onChange={(e)=>setTitle(e.target.value)} /> </div>
//           <div> <BiSearch style={{color:'grey', margin:'auto'}} /> </div>
//         </SEARCHBAR_CONTAINER_WRAPPER>
//         <SEARCHBAR_CONTAINER_WRAPPER>
//           <h4>Where</h4>
//           <div><input type='text' placeholder='City, state, or pin code' value={location} onChange={(e)=>setLocation(e.target.value)} /> </div>
//           <div> <MdLocationPin style={{color:'grey', margin:'auto'}} /> </div>
//         </SEARCHBAR_CONTAINER_WRAPPER>
//         <SEARCHBUTTON onClick={handle_searchJobs}>
//           Find jobs
//         </SEARCHBUTTON>
    
//       </SEARCHBAR_CONTAINER>
//   )
// }

// const SEARCHBAR_CONTAINER = styled.div`
//  display: flex;
//  gap: 1.5rem;
//  justify-content: center;
//  align-items: center;

//  @media screen and (min-width: 400px) and (max-width: 768px){
//   flex-direction: column;
//  }
// `
// const SEARCHBAR_CONTAINER_WRAPPER = styled.div`
// border: 1px solid black;
// display: flex;
// background-color: white;
// align-items: center;
// border-radius: 0.5rem;
// width: 22rem;
// height: 2.5rem;
// padding: 0 0.5rem;
// h4{
//   font-weight: bold;
//   margin-right: 8px;
// }
// div{
//   display: flex; 
//   input{
//     width: 17rem;
//     border-style: hidden;
//     font-size: 14px;
//     &:focus {
//       outline: none;
//     }
//     @media screen and (min-width: 400px) and (max-width: 768px){
//       width: 30rem;
//      }
//   }
// }
// @media screen and (min-width: 400px) and (max-width: 768px){
//   width: 35rem;
//  }

// `
// const SEARCHBUTTON = styled.button`
 
//   align-self: end;
//    padding: 0.75rem 1rem;
//    background-color: #2557a7;
//    border: 1px solid transparent;
//    border-radius: 0.5rem;
//    color: white;
//    font-weight: 700;
//    @media screen and (min-width: 400px) and (max-width: 768px){
//     padding: 0.75rem 16rem;

//  }
// `