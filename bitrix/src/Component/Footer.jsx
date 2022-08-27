import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
// import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{backgroundColor:'#409eef', padding:'40px'}}>
        

        <Flex color='white'  direction='row' justifyContent='space-between' p={5} w='80%' margin='auto'>
            <Box align='left'>
                <Text color='#ebeff2'>BITRIX</Text>
                    <Stack spacing={4} mt={2}>
                        <Text>Bitrix24</Text>
                        <Text>Pricing</Text>
                        <Text>Media kit</Text>
                        <Text>Contact Us</Text>
                        <Text>In the press</Text>
                        <Text>Bitrix 24 August sale</Text>
                    </Stack>
            </Box>

            <Box align='left'>
                 <Text color='#ebeff2'>SUPPORT</Text>
                        <Stack spacing={4} mt={2}>
                            <Text>Helpdesk</Text>
                            <Text>Webinar</Text>
                            <Text>How-to videos</Text>
                            <Text>Submit a ticket</Text>
                            <Text>Schedule a demo</Text>
                            <Text>Bitrix24 Status page</Text>   
                        </Stack>
            </Box>

            <Box align='left'>
                <Text color='#ebeff2'>RESOURCES</Text>
                    <Stack spacing={4} mt={2}>
                        <Text>Blog</Text>
                        <Text>Solitions</Text>
                        <Text>Testimonials</Text>
                        <Text>Alternatives</Text>
                        <Text>Uses</Text>
                        <Text>Guides</Text>
                        <Text>Research</Text>
                    </Stack>
            </Box>

            <Box align='left'>
                <Text color='#ebeff2'>ON-PREMISE</Text>
                    <Stack spacing={4} mt={2}>
                        <Text>On-premise Edition</Text>
                        <Text>Download</Text>
                        <Text>Documentations</Text>
                    </Stack>
            </Box>

            <Box align='left'>
                    <Text color='#ebeff2'>APPS</Text>
                        <Stack spacing={4} mt={2}>
                            <Text>Market</Text>
                            <Text>Mobile App</Text>
                            <Text>Desktop App</Text>
                            <Text>API/Developers</Text>
                        </Stack>
            </Box>

            <Box align='left'>
                <Text color='#ebeff2'>PARTNERS</Text>

                    <Stack spacing={4} mt={2}>
                        <Text>Find a partner</Text>
                        <Text>Become a partner</Text>
                        <Text>Partner login</Text>
                    </Stack>
            </Box>

        </Flex>
        <hr style={{padding:'5px', width:'80%', margin :'auto'}} />


        <Flex direction='row'justifyContent='space-between' w='80%' margin='auto'  >
            
            
            <Box mt={5} p={5} color='#eebff2'>
                <Flex gap='20px'>
                    <Text fontSize='xs'>TERMS</Text>
                    <Text fontSize='xs'>PRIVACY</Text>
                    <Text fontSize='xs'>GDPR</Text>
                    <Text fontSize='xs'>SECURITY</Text>
                    <Text fontSize='xs'>ABUSE</Text>
                    <Text fontSize='xs'>RULES FOR BITRIX24.SITES</Text>
                </Flex>

                <Text align='left' fontSize='sm' mt={5}>Copyright 2022 Bitrix24</Text>

            </Box>
            <Box mt={5} p={5}>

                <Flex gap={5}>
                   <a href='https://apps.apple.com/app/bitrix24/id561683423'>
                     <Image 
                    w='150px'
                    h='50px'
                    src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/app-store-dark-card-2.png' />
                    </a>


                    <a href='https://play.google.com/store/apps/details?id=com.bitrix24.android'>
                    <Image 
                     w='150px'
                     h='50px'
                     src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/play-store-dark-card-2.png' />
                     </a>
                </Flex>

                <Flex color='white' gap='20px' mt={5} justifyContent='right'>
                    <a href='https://www.facebook.com/bitrix24'>
                        <i class="fa-brands fa-facebook fa-2x"></i></a>
                    <a href='https://www.youtube.com/user/Bitrix24'>
                        <i class="fa-brands fa-youtube fa-2x"></i></a>
                    <a href='https://www.instagram.com/bitrix24/'>
                        <i class="fa-brands fa-instagram fa-2x"></i></a>
                    <a href='https://www.linkedin.com/company/bitrix24/'>
                        <i class="fa-brands fa-linkedin fa-2x"></i></a>
                    <a href='https://www.pinterest.com/bitrix24/'>
                        <i class="fa-brands fa-pinterest fa-2x"></i></a>
                
               
                </Flex>


            </Box>
        </Flex>


    </div>
  )
}

export default Footer