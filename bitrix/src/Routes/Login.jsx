import React from 'react'
import 
{ Box, Image, Text

} from "@chakra-ui/react"

function Login() {
  return (
    <div>
      {/* <Text fontSize='6xl'><b>Login</b></Text> */}
      
      <Box style={{display:'flex'}}>
        <Box bg='blue.300' p={4} w='40%' h='100vh'>
        <Image mt={10} ml={10} src='https://www.bitrix24.net/bitrix/templates/new/images/bitrix24-logo-en.svg' />

        <Text 
        fontSize='6xl' 
        color='white' 
        align='left'
        mt={40}
        ml={10}
        lineHeight='1.2'
        >Your Company United.</Text>
        
        <Text
        fontSize='2xl'
        color='white'
        mt={5}
        ml={10}
        align='left'
        >Free. Unlimited. Online.</Text>

        </Box>


        <Box w='60%'>
          <Text
          fontSize='4xl'
          mt={40}
          ml={40}
          align='left'
          ><b>Bitrix24 Login</b></Text>
          <hr style={{ width:'80%', margin:'auto', marginTop:'20px'}}></hr>


        </Box>

      </Box>


    </div>
  )
}

export default Login