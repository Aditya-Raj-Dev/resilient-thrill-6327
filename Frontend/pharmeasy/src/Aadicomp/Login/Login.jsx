import React, { useEffect, useState } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    Button,
    Input,
    DrawerCloseButton,
    Box,
    useTimeout,
    HStack,
  } from '@chakra-ui/react'
  import { useToast} from '@chakra-ui/react'

  import "./login.css"
  import { Heading } from '@chakra-ui/react'
  import axios from "axios"
  import { PinInput, PinInputField } from '@chakra-ui/react'

  function DrawerExample() {
    const toast = useToast()
    const [pin,setPin]=useState("")
    const [showinput,setShowinput]=useState(false)
    const [number,setNumber]=useState(0)
    const [size, setSize] = React.useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    

   function handleClick(newSize){
    setSize(newSize)
    onOpen()
    }
 console.log(showinput)
  const pinarray=[]
 function handlepininput(e){
  pinarray.push(e.target.value)
  // document.addEventListener("keydown", function(event) {
  // if(event.code==="Backspace"){
  //   pin.pop()
  // }
  // })
   setPin(pinarray)
   
 }
console.log(pin.toString("").split(",").join(""))

   var OTP
    function handleotpbutton(){
      if(number.length >10 || number.length<10 || number===0){
           toast({
                  title: `Incorrect Number`,
                  status: "error",
                  isClosable: true,
                  position:"top"
                })
                return
      }
          axios({
            method:"post",
            url:"http://localhost:8080/login",
            data:{
              number
            }
          })
          .then((r)=>{
            OTP=r.data.otp
              toast({
                title: `your OTP is ${r.data.otp}`,
                status: "success",
                isClosable: true,
                position:"top"
              })
            setShowinput(true)
          })
    }
    useEffect(()=>{
       if(pin.toString("").split(",").join("")==OTP){
        toast({
          title: `Login Success`,
          status: "success",
          isClosable: true,
          position:"top"
        })
        onClose()
       }
    },[handlepininput])
    return (
      <>
        <Box
          onClick={() => handleClick("sm")}
          key={"sm"}
          m={4}
          
        >Hello , Login</Box>
      
      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader className='aadiloginheader'>
            <div className='loginnamelogo'>
              <img src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png" alt="" />
            </div>

            <div className='logincup'>
               <img src="https://assets.pharmeasy.in/web-assets/dist/1fe1322a.svg?dim=256x0" alt="" />
            </div>
            
             
          </DrawerHeader>
          <DrawerBody>
            <br />
            <div>
               <Heading as='h4' size='md'>
                 Quick Login / Register
              </Heading>
              <br/>
             {showinput?
             <HStack>
              <PinInput>
                <PinInputField onChange={handlepininput}/>
                <PinInputField onChange={handlepininput}/>
                <PinInputField onChange={handlepininput}/>
                <PinInputField onChange={handlepininput}/>
              </PinInput>
           </HStack>: 
           <Input onChange={(e)=>setNumber(e.target.value)} type="number"  placeholder='Enter Your Mobile Number' size='lg' />}
                <br />
                 <br/>
              <Button colorScheme='teal' size='lg' width="400px"
              onClick={handleotpbutton}>
                Send OTP
              </Button>
              <br />
              <br />
              <p>By clicking continue, you agree with our Privacy Policy</p>
            </div>
             
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      </>
    )
  }


  export  default DrawerExample