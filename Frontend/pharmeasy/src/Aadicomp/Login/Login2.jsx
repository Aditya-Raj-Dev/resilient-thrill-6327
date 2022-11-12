import React, { useState } from 'react'

import { useToast,Input,Button,useDisclosure} from '@chakra-ui/react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

const Login2 = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()

     // *****  FOR  LOGIN******

     const [login,setLogin]=useState({
        emaillogin:"",
        passwordlogin:""
      })
      function handlelogin(e){
        const {name,value}=e.target
         setLogin({...login,
        [name]:value})
      }
      console.log(login)
  
      function Loginuser(){
        axios({
            method:"post",
            mode:"cors",
            url:"https://pharmeasy-api.onrender.com/login",
            data:{
               email:login.emaillogin,
               password:login.passwordlogin
            }
          }).then((r)=>{
            console.log(r.data)
            if(r.data.toast==="s"){
                localStorage.setItem("token",r.data.token)
                toast({
                    title: `${r.data.msg}`,
                    status: "success",
                    position:"top",
                    isClosable: true,
                  })
                  Navigate("/")
            }
            else if(r.data.toast==="i"){
                toast({
                    title: `${r.data.msg}`,
                    status: "info",
                    position:"top",
                    isClosable: true,
                  })
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
  return (
    <div>
          <div>
               <Input onChange={handlelogin} name="emaillogin" placeholder='Enter Your Email' size='lg' />
               <br />
                <br/>
                <Input onChange={handlelogin} name="passwordlogin" placeholder='Enter Your Password' size='lg' />
               <br />
               <br />
             <Button colorScheme='teal' size='lg' width="400px"
             onClick={Loginuser}>
              Login
             </Button>
             </div> 
    </div>
  )
}

export default Login2