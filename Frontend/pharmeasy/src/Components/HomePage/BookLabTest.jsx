import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { dbdata } from "../../db"

const BookLabTest = () => {
  return (
    <Box pl={5}>
      <Heading pl={5} textAlign={"start"} size='md' color={"gray.700"}>Frequently Booked Lab Tests</Heading><br />
      <Flex gap={5}>
        {dbdata?.frequently_booked.map((item) => (
          <Box border={"1px solid red"} p={5} w="500px" h="350px">


            <Button colorScheme='red' >{item.off} % OFF</Button>
            <br /><br />
            <Heading size="sm" textAlign="start" >{item.title}</Heading><br />
            <Text textAlign="start">{item.discription}</Text>
            <br /><br /><br />
            <Flex justifyContent="space-between" >
              {/* <Heading size='md' marginTop={10}>₹{item.mrp}</Heading> */}
              {
                item.off ? <h6 style={{ color: "gray", fontWeight: "600" ,marginTop:"3rem"}}>
                  MRP  <span> <s>₹{item.mrp}</s> </span>
                </h6> : <h6 style={{ color: "gray", fontWeight: "600" ,marginTop:"3rem"}}>
                  MRP  ₹{item.mrp}
                </h6>
              }

              {

                item.off ? <div style={{ gap: "1rem", justifyContent: "center" }}><h6 style={{ fontWeight: "600" ,marginTop:"3rem"}}>₹{(Number(item.mrp) - (Number(item.mrp) * (item.off / 100))).toFixed(2)}</h6>
                  <h6 style={{ color: "tomato", fontWeight: "600" }}> </h6>
                </div> : <h6 style={{ color: "white" }}> 10 </h6>
              }
              <Image src={item.img} w="100px" h="100px" />
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  )
}

export default BookLabTest