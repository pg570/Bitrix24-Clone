import { Box, Button, Flex, Image, Select, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { Link,  } from 'react-router-dom'

function Much() {

   


  return (
    <div style={{marginTop:'20px'}}>
        <Text fontSize='5xl'>How much is Bitrix24 ?</Text>

        <Flex w='80%' margin='auto' justifyContent='space-between'>
            <Box>
                <Flex alignItems='center' gap='20px'>  

                    <Text fontWeight='700' color='grey'>Price per month when paying for </Text>
                    <Select borderColor='#00aeef' w='100px' borderRadius='40px' >
                        <option value='1 month'>1 year</option>
                        <option value='3 months'>3 months</option>
                        <option value='1 year'>1 month</option>
                    </Select>
                </Flex>
            </Box>


            <Box>
                <Flex alignItems='center' gap={10}>

                    <Text fontWeight='700' color='grey'>Renew plans bought before August 1, 2022</Text>
                    <Link to='/pricing'>
                        <Button borderRadius='40px' variant='outline' borderColor='#00aeef'> Archived plans</Button>
                    </Link>
                </Flex>
            </Box>
        </Flex>
        <br />

        <SimpleGrid columns={[1,2,4,5]} w='95%' margin='auto' spacing={5}  >
            <Box borderRadius='20px' p={5} bg='rgba(169,212,0,0.23)'>
                <Text fontWeight='500' fontSize='3xl'>Free</Text>
                <Text fontSize='xs'>Start working online and sell more with CRM</Text>
                <br />
                <hr />
                <br />
                <Text fontSize='2xl'><i class="fa-solid fa-fire-flame-curved"></i> Unlimited</Text>
                <Text>users</Text>
                <br />
                <Text fontSize='2xl' fontWeight='700' color='#7c9b00'>100 % Free</Text>
                <br />
                <Link to=''>
                    <Button className='btn3'
                    bg='#7c9b00'
                    colorScheme='blackAplha' 
                    fontSize='.85rem'
                    fontWeight='700'
                    color='white'
                    borderRadius='30px'
                    p='0.5rem 1.25rem'

                    > REGISTER FREE</Button>
                </Link>
                

                <Text mt={5} fontWeight='500' color='#00445a'>5 GB</Text>
                <br />
                <hr />
                

                
                <Text mt={2} align='left' color='#262626' fontSize='15px'><b>Collaboration  </b>   
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjY0NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjN0NBOTU5Ii8+PHBhdGggb3BhY2l0eT0iLjkiIGQ9Ik0zIDdhMyAzIDAgMCAxIDMtM2gyLjk0YS4wNi4wNiAwIDAgMSAuMDYuMDZ2NS44OGEuMDYuMDYgMCAwIDEtLjA2LjA2SDZhMyAzIDAgMCAxLTMtM3oiIGZpbGw9IiM1NzlGMUUiIGZpbGwtb3BhY2l0eT0iLjg4MyIvPjwvc3ZnPg==' />
                </Text>
                

                <Flex direction='column'  gap='5px' p={2} >
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Chat</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>HD Videocalls</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Calender</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Compony Workspace</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Feed</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Knowledge Base</Text>
                </Flex>

                <Text align='left' color='#262626' fontSize='15px'><b>Task & projects  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjY0NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjN0NBOTU5Ii8+PHBhdGggb3BhY2l0eT0iLjkiIGQ9Ik0zIDdhMyAzIDAgMCAxIDMtM2gyLjk0YS4wNi4wNiAwIDAgMSAuMDYuMDZ2NS44OGEuMDYuMDYgMCAwIDEtLjA2LjA2SDZhMyAzIDAgMCAxLTMtM3oiIGZpbGw9IiM1NzlGMUUiIGZpbGwtb3BhY2l0eT0iLjg4MyIvPjwvc3ZnPg==' />
               </Text>

                <Text align='left' color='#262626' fontSize='15px'><b>CRM  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjY0NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjN0NBOTU5Ii8+PHBhdGggb3BhY2l0eT0iLjkiIGQ9Ik0zIDdhMyAzIDAgMCAxIDMtM2gyLjk0YS4wNi4wNiAwIDAgMSAuMDYuMDZ2NS44OGEuMDYuMDYgMCAwIDEtLjA2LjA2SDZhMyAzIDAgMCAxLTMtM3oiIGZpbGw9IiM1NzlGMUUiIGZpbGwtb3BhY2l0eT0iLjg4MyIvPjwvc3ZnPg==' />
                </Text>

                <Text align='left' color='#262626' fontSize='15px'><b>Drive  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjY0NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjN0NBOTU5Ii8+PHBhdGggb3BhY2l0eT0iLjkiIGQ9Ik0zIDdhMyAzIDAgMCAxIDMtM2gyLjk0YS4wNi4wNiAwIDAgMSAuMDYuMDZ2NS44OGEuMDYuMDYgMCAwIDEtLjA2LjA2SDZhMyAzIDAgMCAxLTMtM3oiIGZpbGw9IiM1NzlGMUUiIGZpbGwtb3BhY2l0eT0iLjg4MyIvPjwvc3ZnPg==' />

                </Text>
                <Text align='left' color='#262626' fontSize='15px'><b>Contact Center  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjY0NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjN0NBOTU5Ii8+PHBhdGggb3BhY2l0eT0iLjkiIGQ9Ik0zIDdhMyAzIDAgMCAxIDMtM2gyLjk0YS4wNi4wNiAwIDAgMSAuMDYuMDZ2NS44OGEuMDYuMDYgMCAwIDEtLjA2LjA2SDZhMyAzIDAgMCAxLTMtM3oiIGZpbGw9IiM1NzlGMUUiIGZpbGwtb3BhY2l0eT0iLjg4MyIvPjwvc3ZnPg==' />
                </Text>

                <Text align='left' color='#262626' fontSize='15px'><b>Website Builder  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjY0NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjN0NBOTU5Ii8+PHBhdGggb3BhY2l0eT0iLjkiIGQ9Ik0zIDdhMyAzIDAgMCAxIDMtM2gyLjk0YS4wNi4wNiAwIDAgMSAuMDYuMDZ2NS44OGEuMDYuMDYgMCAwIDEtLjA2LjA2SDZhMyAzIDAgMCAxLTMtM3oiIGZpbGw9IiM1NzlGMUUiIGZpbGwtb3BhY2l0eT0iLjg4MyIvPjwvc3ZnPg==' />
                </Text>


            </Box>
{/* ************************************************************************************************** */}
            <Box borderRadius='20px' p={5} bg='rgba(33,189,238,0.15)'>
            <Text fontWeight='500' fontSize='3xl'>Basic</Text>
                <Text fontSize='xs'>Effective collaboration for small businesses and sales teams</Text>
                <br />
                <hr />
                <br />
                <Text fontSize='2xl'>5</Text>
                <Text>users</Text>
                <br />
                <Text fontSize='2xl' fontWeight='500' color='#0050af'>₹. 3,052/month</Text>
                <br />
                <Link to='/pricing'>
                    <Button className='btn3'
                    bg='#21bdee'
                    colorScheme='blackAplha' 
                    fontSize='0.85rem'
                    fontWeight='700'
                    color='white'
                    borderRadius='30px'
                    p='0.5rem 3rem'

                    > BUY</Button>
                </Link>
                

                <Text mt={5} fontWeight='500' color='#00445a'>25 GB</Text>
                <br />
                <hr />
                

                
                <Text mt={2} align='left' color='#262626' fontSize='15px'><b>Collaboration  </b>   
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                </Text>
                

                <Flex direction='column'  gap='5px' p={2} >
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Chat</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>HD Videocalls</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Calender</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Compony Workspace</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Feed</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Knowledge Base</Text>
                </Flex>

                <Text align='left' color='#262626' fontSize='15px'><b>Task & projects  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
               </Text>

                <Text align='left' color='#262626' fontSize='15px'><b>CRM  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                </Text>

                <Text align='left' color='#262626' fontSize='15px'><b>Drive  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />

                </Text>
                <Text align='left' color='#262626' fontSize='15px'><b>Contact Center  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                </Text>

                <Text align='left' color='#262626' fontSize='15px'><b>Website Builder  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                </Text>

                <Text align='left' color='#262626' fontSize='15px'><b>Online Store  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                </Text>
            </Box>
{/* ****************************************************************************************************** */}
            <Box borderRadius='20px' p={5} bg='rgba(33,189,238,0.15)'>
            <Text fontWeight='500' fontSize='3xl'>Standard</Text>
                <Text fontSize='xs'>Advanced collaboration for your entire company and workgroups</Text>
                <br />
                <hr />
                <br />
                <Text fontSize='2xl'>50</Text>
                <Text>users</Text>
                <br />
                <Text fontSize='2xl' fontWeight='500' color='#0050af'>₹. 6,118/month</Text>
                <br />
                <Link to=''>
                    <Button className='btn3'
                    bg='#21bdee'
                    colorScheme='blackAplha' 
                    fontSize='.85rem'
                    fontWeight='700'
                    color='white'
                    borderRadius='30px'
                    p='0.5rem 3rem'

                    > BUY</Button>
                </Link>
                

                <Text mt={5} fontWeight='500' color='#00445a'>100 GB</Text>
                <br />
                <hr />
                

                
                <Text mt={2} align='left' color='#262626' fontSize='15px'><b>Collaboration  </b>   
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                </Text>
                

                <Flex direction='column'  gap='5px' p={2} >
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Chat</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>HD Videocalls</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Calender</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Compony Workspace</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Feed</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Knowledge Base</Text>
                </Flex>

                <Text align='left' color='#262626' fontSize='15px'><b>Task & projects  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
               </Text>

                <Text align='left' color='#262626' fontSize='15px'><b>CRM  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                </Text>

                <Text align='left' color='#262626' fontSize='15px'><b>Drive  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />

                </Text>
                <Text align='left' color='#262626' fontSize='15px'><b>Contact Center  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                </Text>

                <Text align='left' color='#262626' fontSize='15px'><b>Website Builder  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                </Text>

                <Text align='left' color='#262626' fontSize='15px'><b>Online Store  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                </Text>

                <Text align='left' color='#262626' fontSize='15px'><b>marketing  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                </Text>

                <Text align='left' color='#262626' fontSize='15px'><b>Online Documents  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                </Text>

            </Box>

{/* ************************************************************************************************** */}

            <Box borderRadius='20px' p={5} bg='rgba(33,189,238,0.15)'>
            <Text fontWeight='500' fontSize='3xl'>Professional</Text>
                <Text fontSize='xs'>Maximum sales and business process automation</Text>
                <br />
                <hr />
                <br />
                <Text fontSize='2xl'>100</Text>
                <Text>users</Text>
                <br />
                <Text fontSize='2xl' fontWeight='500' color='#0050af'>₹. 12,243/month</Text>
                <br />
                <Link to=''>
                    <Button className='btn3'
                    bg='#21bdee'
                    colorScheme='blackAplha' 
                    fontSize='.85rem'
                    fontWeight='700'
                    color='white'
                    borderRadius='30px'
                    p='0.5rem 3rem'

                    > BUY</Button>
                </Link>
                

                <Text mt={5} fontWeight='500' color='#00445a'>1,024 GB</Text>
                <br />
                <hr />
                

                
                <Text mt={2} align='left' color='#262626' fontSize='15px'><b>Collaboration  </b>   
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                </Text>
                

                <Flex direction='column'  gap='5px' p={2} >
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Chat</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>HD Videocalls</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Calender</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Compony Workspace</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Feed</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Knowledge Base</Text>
                </Flex>

                <Text align='left' color='#262626' fontSize='15px'><b>Task & projects  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zek0yNiA3YTMgMyAwIDAgMS0zIDNoLTMuOTNhLjA3LjA3IDAgMCAxLS4wNy0uMDdWNC4wN2EuMDcuMDcgMCAwIDEgLjA3LS4wN0gyM2EzIDMgMCAwIDEgMyAzeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
               </Text>

                <Text align='left' color='#262626' fontSize='15px'><b>CRM  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zek0yNiA3YTMgMyAwIDAgMS0zIDNoLTMuOTNhLjA3LjA3IDAgMCAxLS4wNy0uMDdWNC4wN2EuMDcuMDcgMCAwIDEgLjA3LS4wN0gyM2EzIDMgMCAwIDEgMyAzeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                </Text>

                <Text align='left' color='#262626' fontSize='15px'><b>Drive  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zek0yNiA3YTMgMyAwIDAgMS0zIDNoLTMuOTNhLjA3LjA3IDAgMCAxLS4wNy0uMDdWNC4wN2EuMDcuMDcgMCAwIDEgLjA3LS4wN0gyM2EzIDMgMCAwIDEgMyAzeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />

                </Text>
                <Text align='left' color='#262626' fontSize='15px'><b>Contact Center  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zek0yNiA3YTMgMyAwIDAgMS0zIDNoLTMuOTNhLjA3LjA3IDAgMCAxLS4wNy0uMDdWNC4wN2EuMDcuMDcgMCAwIDEgLjA3LS4wN0gyM2EzIDMgMCAwIDEgMyAzeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                </Text>

                <Text align='left' color='#262626' fontSize='15px'><b>Website Builder  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zek0yNiA3YTMgMyAwIDAgMS0zIDNoLTMuOTNhLjA3LjA3IDAgMCAxLS4wNy0uMDdWNC4wN2EuMDcuMDcgMCAwIDEgLjA3LS4wN0gyM2EzIDMgMCAwIDEgMyAzeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                </Text>

                <Text align='left' color='#262626' fontSize='15px'><b>Online Store  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zek0yNiA3YTMgMyAwIDAgMS0zIDNoLTMuOTNhLjA3LjA3IDAgMCAxLS4wNy0uMDdWNC4wN2EuMDcuMDcgMCAwIDEgLjA3LS4wN0gyM2EzIDMgMCAwIDEgMyAzeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                </Text>

                <Text align='left' color='#262626' fontSize='15px'><b>marketing  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zek0yNiA3YTMgMyAwIDAgMS0zIDNoLTMuOTNhLjA3LjA3IDAgMCAxLS4wNy0uMDdWNC4wN2EuMDcuMDcgMCAwIDEgLjA3LS4wN0gyM2EzIDMgMCAwIDEgMyAzeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                </Text>

                <Text align='left' color='#262626' fontSize='15px'><b>Online Documents  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zek0yNiA3YTMgMyAwIDAgMS0zIDNoLTMuOTNhLjA3LjA3IDAgMCAxLS4wNy0uMDdWNC4wN2EuMDcuMDcgMCAwIDEgLjA3LS4wN0gyM2EzIDMgMCAwIDEgMyAzeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                </Text>

                <Text align='left' color='#262626' fontSize='15px'><b>Sales Intelligence </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                </Text>

                <Text align='left' color='#262626' fontSize='15px'><b>Automation  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zek0yNiA3YTMgMyAwIDAgMS0zIDNoLTMuOTNhLjA3LjA3IDAgMCAxLS4wNy0uMDdWNC4wN2EuMDcuMDcgMCAwIDEgLjA3LS4wN0gyM2EzIDMgMCAwIDEgMyAzeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                </Text>

                <Text align='left' color='#262626' fontSize='15px'><b>HR  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zek0yNiA3YTMgMyAwIDAgMS0zIDNoLTMuOTNhLjA3LjA3IDAgMCAxLS4wNy0uMDdWNC4wN2EuMDcuMDcgMCAwIDEgLjA3LS4wN0gyM2EzIDMgMCAwIDEgMyAzeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                </Text>

            </Box>
{/* ************************************************************************************************** */}


            <Box borderRadius='20px' p={5} bg='#31f7ed33'>
            <Text fontWeight='500' fontSize='3xl'>Enterprise</Text>
                <Text fontSize='xs'>Digital transformation tools for large businesses and enterprises</Text>
                <br />
                <hr />
                <br />
                <Text fontSize='2xl'>250</Text>
                <Text>users</Text>
                <br />
                <Text fontSize='2xl' fontWeight='500' color='#0050af'>₹. 24,493/month</Text>
                <br />
                <Link to=''>
                    <Button className='btn3'
                    bg='#21bdee'
                    colorScheme='blackAplha' 
                    fontSize='.85rem'
                    fontWeight='700'
                    color='white'
                    borderRadius='30px'
                    p='0.5rem 3rem'

                    > BUY</Button>
                </Link>
                

                <Text mt={5} fontWeight='500' color='#00445a'>3 TB</Text>
                <br />
                <hr />
                

                
                <Text mt={2} align='left' color='#262626' fontSize='15px'><b>Collaboration  </b>   
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zek0yNiA3YTMgMyAwIDAgMS0zIDNoLTMuOTNhLjA3LjA3IDAgMCAxLS4wNy0uMDdWNC4wN2EuMDcuMDcgMCAwIDEgLjA3LS4wN0gyM2EzIDMgMCAwIDEgMyAzeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                </Text>
                

                <Flex direction='column'  gap='5px' p={2} >
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Chat</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>HD Videocalls</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Calender</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Compony Workspace</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Feed</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Knowledge Base</Text>
                </Flex>

                <Text align='left' color='#262626' fontSize='15px'><b>Task & projects  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zek0yNiA3YTMgMyAwIDAgMS0zIDNoLTMuOTNhLjA3LjA3IDAgMCAxLS4wNy0uMDdWNC4wN2EuMDcuMDcgMCAwIDEgLjA3LS4wN0gyM2EzIDMgMCAwIDEgMyAzeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
               </Text>

                <Text align='left' color='#262626' fontSize='15px'><b>CRM  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zek0yNiA3YTMgMyAwIDAgMS0zIDNoLTMuOTNhLjA3LjA3IDAgMCAxLS4wNy0uMDdWNC4wN2EuMDcuMDcgMCAwIDEgLjA3LS4wN0gyM2EzIDMgMCAwIDEgMyAzeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                </Text>

                <Text align='left' color='#262626' fontSize='15px'><b>Drive  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zek0yNiA3YTMgMyAwIDAgMS0zIDNoLTMuOTNhLjA3LjA3IDAgMCAxLS4wNy0uMDdWNC4wN2EuMDcuMDcgMCAwIDEgLjA3LS4wN0gyM2EzIDMgMCAwIDEgMyAzeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />

                </Text>
                <Text align='left' color='#262626' fontSize='15px'><b>Contact Center  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zek0yNiA3YTMgMyAwIDAgMS0zIDNoLTMuOTNhLjA3LjA3IDAgMCAxLS4wNy0uMDdWNC4wN2EuMDcuMDcgMCAwIDEgLjA3LS4wN0gyM2EzIDMgMCAwIDEgMyAzeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                </Text>

                <Text align='left' color='#262626' fontSize='15px'><b>Website Builder  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zek0yNiA3YTMgMyAwIDAgMS0zIDNoLTMuOTNhLjA3LjA3IDAgMCAxLS4wNy0uMDdWNC4wN2EuMDcuMDcgMCAwIDEgLjA3LS4wN0gyM2EzIDMgMCAwIDEgMyAzeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                </Text>

                <Text align='left' color='#262626' fontSize='15px'><b>Online Store  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zek0yNiA3YTMgMyAwIDAgMS0zIDNoLTMuOTNhLjA3LjA3IDAgMCAxLS4wNy0uMDdWNC4wN2EuMDcuMDcgMCAwIDEgLjA3LS4wN0gyM2EzIDMgMCAwIDEgMyAzeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                </Text>

                <Text align='left' color='#262626' fontSize='15px'><b>marketing  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zek0yNiA3YTMgMyAwIDAgMS0zIDNoLTMuOTNhLjA3LjA3IDAgMCAxLS4wNy0uMDdWNC4wN2EuMDcuMDcgMCAwIDEgLjA3LS4wN0gyM2EzIDMgMCAwIDEgMyAzeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                </Text>

                <Text align='left' color='#262626' fontSize='15px'><b>Online Documents  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zek0yNiA3YTMgMyAwIDAgMS0zIDNoLTMuOTNhLjA3LjA3IDAgMCAxLS4wNy0uMDdWNC4wN2EuMDcuMDcgMCAwIDEgLjA3LS4wN0gyM2EzIDMgMCAwIDEgMyAzeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                </Text>

                <Text align='left' color='#262626' fontSize='15px'><b>Sales Intelligence </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zek0yNiA3YTMgMyAwIDAgMS0zIDNoLTMuOTNhLjA3LjA3IDAgMCAxLS4wNy0uMDdWNC4wN2EuMDcuMDcgMCAwIDEgLjA3LS4wN0gyM2EzIDMgMCAwIDEgMyAzeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                </Text>

                <Text align='left' color='#262626' fontSize='15px'><b>Automation  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zek0yNiA3YTMgMyAwIDAgMS0zIDNoLTMuOTNhLjA3LjA3IDAgMCAxLS4wNy0uMDdWNC4wN2EuMDcuMDcgMCAwIDEgLjA3LS4wN0gyM2EzIDMgMCAwIDEgMyAzeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                </Text>

                <Text align='left' color='#262626' fontSize='15px'><b>HR  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zek0yNiA3YTMgMyAwIDAgMS0zIDNoLTMuOTNhLjA3LjA3IDAgMCAxLS4wNy0uMDdWNC4wN2EuMDcuMDcgMCAwIDEgLjA3LS4wN0gyM2EzIDMgMCAwIDEgMyAzeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                </Text>

                <Text align='left' color='#262626' fontSize='15px'><b>Multiple Branches  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zek0yNiA3YTMgMyAwIDAgMS0zIDNoLTMuOTNhLjA3LjA3IDAgMCAxLS4wNy0uMDdWNC4wN2EuMDcuMDcgMCAwIDEgLjA3LS4wN0gyM2EzIDMgMCAwIDEgMyAzeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                </Text>

                <Text align='left' color='#262626' fontSize='15px'><b>Scalability  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zek0yNiA3YTMgMyAwIDAgMS0zIDNoLTMuOTNhLjA3LjA3IDAgMCAxLS4wNy0uMDdWNC4wN2EuMDcuMDcgMCAwIDEgLjA3LS4wN0gyM2EzIDMgMCAwIDEgMyAzeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                </Text>

                <Text align='left' color='#262626' fontSize='15px'><b>Enterprise Pack  </b>
                <Image display='inline-block' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zek0yNiA3YTMgMyAwIDAgMS0zIDNoLTMuOTNhLjA3LjA3IDAgMCAxLS4wNy0uMDdWNC4wN2EuMDcuMDcgMCAwIDEgLjA3LS4wN0gyM2EzIDMgMCAwIDEgMyAzeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                </Text>

            </Box>


        </SimpleGrid>
        <br />

    </div>
  )
}

export default Much