import { Box, Button, Flex, Select, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { Link,  } from 'react-router-dom'

function Much() {

   


  return (
    <div>
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
            <Box borderRadius='20px' p={5} bg='#CFF73233'>
                <Text fontWeight='500' fontSize='3xl'>Free</Text>
                <Text fontSize='xs'>Start working online and sell more with CRM</Text>
                <hr />
             
                <Text fontSize='2xl'><i class="fa-solid fa-fire-flame-curved"></i> Unlimited</Text>
                <Text>users</Text>

                <Text fontSize='2xl' fontWeight='700' color='#7c9b00'>100 %</Text>

                <Link to=''>
                    <Button className='btn3'
                    bg='#a6f300'
                    colorScheme='blackAplha' 
                    fontSize='.75rem'
                    fontWeight='700'
                    color='#525c69'
                    borderRadius='30px'
                    p='0.5rem 1.25rem'

                    > REGISTER FREE</Button>
                </Link>


                <Text fontWeight='500' color='#00445a'>5 GB</Text>
                <hr />

                <Text align='left' color='#262626' fontSize='15px'><b>Collaboration</b></Text>

                <Flex direction='column'  gap='5px' p={2} >
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Chat</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>HD Videocalls</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Calender</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Compony Workspace</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Feed</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Knowledge Base</Text>
                </Flex>

                <Text align='left' color='#262626' fontSize='15px'><b>Task & projects</b></Text>
                <Text align='left' color='#262626' fontSize='15px'><b>CRM</b></Text>
                <Text align='left' color='#262626' fontSize='15px'><b>Drive</b></Text>
                <Text align='left' color='#262626' fontSize='15px'><b>Contact Center</b></Text>
                <Text align='left' color='#262626' fontSize='15px'><b>Wbsite Builder</b></Text>


            </Box>

            <Box borderRadius='20px' p={5} bg='#caf2ff73'>
            <Text fontWeight='500' fontSize='3xl'>Free</Text>
                <Text fontSize='xs'>Start working online and sell more with CRM</Text>
                <hr />
             
                <Text fontSize='2xl'><i class="fa-solid fa-fire-flame-curved"></i> Unlimited</Text>
                <Text>users</Text>

                <Text fontSize='2xl' fontWeight='700' color='#7c9b00'>100 %</Text>

                <Link to=''>
                    <Button className='btn3'
                    bg='#a6f300'
                    colorScheme='blackAplha' 
                    fontSize='.75rem'
                    fontWeight='700'
                    color='#525c69'
                    borderRadius='30px'
                    p='0.5rem 1.25rem'

                    > REGISTER FREE</Button>
                </Link>


                <Text fontWeight='500' color='#00445a'>5 GB</Text>
                <hr />

                <Text align='left' color='#262626' fontSize='15px'><b>Collaboration</b></Text>

                <Flex direction='column'  gap='5px' p={2} >
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Chat</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>HD Videocalls</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Calender</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Compony Workspace</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Feed</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Knowledge Base</Text>
                </Flex>

                <Text align='left' color='#262626' fontSize='15px'><b>Task & projects</b></Text>
                <Text align='left' color='#262626' fontSize='15px'><b>CRM</b></Text>
                <Text align='left' color='#262626' fontSize='15px'><b>Drive</b></Text>
                <Text align='left' color='#262626' fontSize='15px'><b>Contact Center</b></Text>
                <Text align='left' color='#262626' fontSize='15px'><b>Wbsite Builder</b></Text>


            </Box>
            <Box borderRadius='20px' p={5} bg='#caf2ff73'>
            <Text fontWeight='500' fontSize='3xl'>Free</Text>
                <Text fontSize='xs'>Start working online and sell more with CRM</Text>
                <hr />
             
                <Text fontSize='2xl'><i class="fa-solid fa-fire-flame-curved"></i> Unlimited</Text>
                <Text>users</Text>

                <Text fontSize='2xl' fontWeight='700' color='#7c9b00'>100 %</Text>

                <Link to=''>
                    <Button className='btn3'
                    bg='#a6f300'
                    colorScheme='blackAplha' 
                    fontSize='.75rem'
                    fontWeight='700'
                    color='#525c69'
                    borderRadius='30px'
                    p='0.5rem 1.25rem'

                    > REGISTER FREE</Button>
                </Link>


                <Text fontWeight='500' color='#00445a'>5 GB</Text>
                <hr />

                <Text align='left' color='#262626' fontSize='15px'><b>Collaboration</b></Text>

                <Flex direction='column'  gap='5px' p={2} >
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Chat</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>HD Videocalls</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Calender</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Compony Workspace</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Feed</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Knowledge Base</Text>
                </Flex>

                <Text align='left' color='#262626' fontSize='15px'><b>Task & projects</b></Text>
                <Text align='left' color='#262626' fontSize='15px'><b>CRM</b></Text>
                <Text align='left' color='#262626' fontSize='15px'><b>Drive</b></Text>
                <Text align='left' color='#262626' fontSize='15px'><b>Contact Center</b></Text>
                <Text align='left' color='#262626' fontSize='15px'><b>Wbsite Builder</b></Text>


            </Box>
            <Box borderRadius='20px' p={5} bg='#caf2ff73'>
            <Text fontWeight='500' fontSize='3xl'>Free</Text>
                <Text fontSize='xs'>Start working online and sell more with CRM</Text>
                <hr />
             
                <Text fontSize='2xl'><i class="fa-solid fa-fire-flame-curved"></i> Unlimited</Text>
                <Text>users</Text>

                <Text fontSize='2xl' fontWeight='700' color='#7c9b00'>100 %</Text>

                <Link to=''>
                    <Button className='btn3'
                    bg='#a6f300'
                    colorScheme='blackAplha' 
                    fontSize='.75rem'
                    fontWeight='700'
                    color='#525c69'
                    borderRadius='30px'
                    p='0.5rem 1.25rem'

                    > REGISTER FREE</Button>
                </Link>


                <Text fontWeight='500' color='#00445a'>5 GB</Text>
                <hr />

                <Text align='left' color='#262626' fontSize='15px'><b>Collaboration</b></Text>

                <Flex direction='column'  gap='5px' p={2} >
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Chat</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>HD Videocalls</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Calender</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Compony Workspace</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Feed</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Knowledge Base</Text>
                </Flex>

                <Text align='left' color='#262626' fontSize='15px'><b>Task & projects</b></Text>
                <Text align='left' color='#262626' fontSize='15px'><b>CRM</b></Text>
                <Text align='left' color='#262626' fontSize='15px'><b>Drive</b></Text>
                <Text align='left' color='#262626' fontSize='15px'><b>Contact Center</b></Text>
                <Text align='left' color='#262626' fontSize='15px'><b>Wbsite Builder</b></Text>


            </Box>
            <Box borderRadius='20px' p={5} bg='#31f7ed33'>
            <Text fontWeight='500' fontSize='3xl'>Free</Text>
                <Text fontSize='xs'>Start working online and sell more with CRM</Text>
                <hr />
             
                <Text fontSize='2xl'><i class="fa-solid fa-fire-flame-curved"></i> Unlimited</Text>
                <Text>users</Text>

                <Text fontSize='2xl' fontWeight='700' color='#7c9b00'>100 %</Text>

                <Link to=''>
                    <Button className='btn3'
                    bg='#a6f300'
                    colorScheme='blackAplha' 
                    fontSize='.75rem'
                    fontWeight='700'
                    color='#525c69'
                    borderRadius='30px'
                    p='0.5rem 1.25rem'

                    > REGISTER FREE</Button>
                </Link>


                <Text fontWeight='500' color='#00445a'>5 GB</Text>
                <hr />

                <Text align='left' color='#262626' fontSize='15px'><b>Collaboration</b></Text>

                <Flex direction='column'  gap='5px' p={2} >
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Chat</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>HD Videocalls</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Calender</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Compony Workspace</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Feed</Text>
                    <Text align='left' color='#525c69' fontSize='xs' fontWeight='700'>Knowledge Base</Text>
                </Flex>

                <Text align='left' color='#262626' fontSize='15px'><b>Task & projects</b></Text>
                <Text align='left' color='#262626' fontSize='15px'><b>CRM</b></Text>
                <Text align='left' color='#262626' fontSize='15px'><b>Drive</b></Text>
                <Text align='left' color='#262626' fontSize='15px'><b>Contact Center</b></Text>
                <Text align='left' color='#262626' fontSize='15px'><b>Wbsite Builder</b></Text>


            </Box>
        </SimpleGrid>
        <br />

    </div>
  )
}

export default Much