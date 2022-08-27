import { Box, Button, Image, Text,  } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import "../CSS/Navbar.css"

function Navbar() {

  const [user, setUser] = useState({});
  const { isAuth } = useContext(AuthContext)

  useEffect(()=>{
    setTimeout(() => (getUser()) , 2000)  
  },[])

  function getUser(){
    fetch('https://damp-ravine-71862.herokuapp.com/profile').then(res=> res.json()).then((data) => setUser(data.name))
  }

  console.log(user)
  console.log(isAuth)

  return (
    <div style={{
    
    height:'10vh', 
    boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
    padding:'15px',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center'
    }}>


        <Box>
          <Link to='/'>
          <Image
          width={180} 
          src='data:image/png;base64,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'>

          </Image>
            </Link>
        </Box>


        <Box style={{display:'flex', justifyContent:'center', gap:'25px', alignItems:'center'}}>

          <Link to='/tools'><Text as='b' className='texthover'>TOOLS</Text></Link>
          <Link to='/pricing'><Text as='b' className='texthover'>PRICING</Text></Link>
          <Link to=''><Text as='b' className='texthover'>SOLUTIONS</Text></Link>
          <Link to=''><Text as='b' className='texthover'>PARTNERS</Text></Link>
          <Link to=''><Text as='b' className='texthover'>APPS</Text></Link>
          <Link to=''><Text as='b' className='texthover'>BLOGS</Text></Link>
          <Link to=''><Text as='b' className='texthover'>SUPPORT</Text></Link>
          


        </Box>


        <Box display='flex' gap={5}>


          <Link to=''>
            <Button className='btn1'
            bg='#a6f300'
            colorScheme='blackAplha' 
            fontSize='0.75rem'
            fontWeight='700'
            color='#525c69'
            borderRadius='30px'
            p='0.5rem 1.25rem'

            > START FOR FREE</Button>
            </Link>


          <Link to='/login'>
            <Button
            variant='ghost'
            gap="8px"
            >
              <i class="fa-solid fa-user" color='black'></i> 
              LOG IN
               </Button>
            </Link>
            
     

        </Box>






    </div>
  )
}

export default Navbar