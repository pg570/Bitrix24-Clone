import { Box, Button, Container, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "../CSS/PremiseHome.css"

function Premisehome() {
  return (
    <div>
        
        <Flex w='80%' justifyContent='center' margin='auto' alignItems='center'>
            <Box p={10} >

                <Text fontSize='4xl' ml={3} align='left'>Bitrix24 on premise </Text>
                <br />
                <Container align='left' fontSize='xl'>
                You can use the self-hosted version of Bitrix24 to run on your server. 
                You get full control over data, source code access, and additional tools, such as helpdesk and e-learning,
                 as well as integration and customization options.
                </Container>
                <br />
                <Button variant='outline' color='#00aeef'
                borderColor='#00aeef'
                borderRadius='30px'
                p='0.5rem 1.25rem'
                
                >LEARN MORE</Button>
            </Box>
            <Box p={10}>
                <Image 
                w='100%'
                p={10}
                display='inline-block'
                margin='auto'
                src='https://www.bitrix24.in/upload/optimizer/converted/images/content_common/images/tools/inc/tools_inc_on-premise_3.png.webp?1659434641000' />
            </Box>
        </Flex>




        <Text fontSize='4xl'>Ready to try ?</Text>
        <br />
        <Link to=''>
            <Button className='btn2'
            bg='#a6f300'
            colorScheme='blackAplha' 
            fontSize='1rem'
            fontWeight='700'
            color='#525c69'
            borderRadius='30px'
            p='0.5rem 1.25rem'

            > REGISTER FREE</Button>
            </Link>
        <br />
        <br />


    </div>
  )
}

export default Premisehome