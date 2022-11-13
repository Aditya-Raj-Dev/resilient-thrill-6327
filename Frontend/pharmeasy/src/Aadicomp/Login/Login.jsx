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
import Login2 from './Login2'
import { Link, useNavigate } from 'react-router-dom'




  function DrawerExample() {

    const navigate=useNavigate()
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()


   // *****  FOR  RESISTER ******
   const [logstatus,setLogstatus]=useState(false)
    const [signup,setSignup]=useState({
       name:"",
       email:"",
       password:""
    })

    function handlesignup(e){
       const {name,value}=e.target
       setSignup({...signup,
      [name]:value})
    }
    function registeruser(){ 
      if(signup.name==="" && signup.email==="" && signup.password===""){
        toast({
          title: `Please Fill All Details`,
          status: "info",
          position:"top",
          isClosable: true,
        })
        return
      }
      axios({
        method:"post",
        url:"https://medeasy.up.railway.app/signup",
        data:{
           name:signup.name,
           email:signup.email,
           password:signup.password
        }
      }).then((r)=>{
        
        if(r.data.toast==="s"){
          toast({
            title: `${r.data.msg}`,
            status: "success",
            position:"top",
            isClosable: true,
          })
          navigate("/")
        }
        else if(r.data.toast==="i"){
          toast({
            title: `${r.data.msg}`,
            status: "info",
            position:"top",
            isClosable: true,
          })
          setTimeout(()=>{
            toast({
              title: `You Can Login Now`,
              status: "success",
              position:"top",
              isClosable: true,
            })
            setLogstatus(true)
          },2000)
         
        }
        else{
          toast({
            title: `${r.data.msg}`,
            status: "error",
            position:"top",
            isClosable: true,
          })
        }
        
      })
    }

    


    
  
    
    const [size, setSize] = React.useState('')
    
// *****  FOR OPENING THE SIDEBAR ******
   function handleClick(newSize){
    setSize(newSize)
    onOpen()
    }
 

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
              <br />
             { logstatus?
             <Login2/>
           :<div>
              <Input onChange={handlesignup} name="name" placeholder='Enter Your Name' size='lg' />
                <br />
                <br />
                <Input onChange={handlesignup} name="email" placeholder='Enter Your Email' size='lg' />
                <br />
                 <br/>
                 <Input onChange={handlesignup} name="password" placeholder='Enter Your Password' size='lg' />
                <br />
                <br />
              <Button colorScheme='teal' size='lg' width="400px"
              onClick={registeruser}>
                Register
              </Button>
              <br/>
              <br />
                          <Button colorScheme='teal' size='lg' width="400px"
              onClick={()=>setLogstatus(!logstatus)}>
                Already Registered , Login

              </Button>
              </div>
              }
             
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