import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Component/Footer'
import Navbar from '../Component/Navbar'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

function Pricing() {
  return (
    <div>
        <Navbar />


        <Box p={5} bg='#409eef'>
          <Text 
          ml={20}
          color='white'
          fontSize='6xl'
          align='left'
          fontWeight='300'
          > Cloud pricing</Text>
        </Box>

        <Image display='inline-block'
        mt={10}
        src='https://www.bitrix24.in/upload/rk/3fc/b5nzeckaswugoa6vm15ktqwj0rvcn58x.jpg?1657626164021' />


        <TableContainer w='60%' m='auto' mt={10}>
          <Table variant='simple'>
            
            <Thead>
              <Tr>
                <Th><Text fontSize='1.5rem'
                fontWeight='400'
                color='black'
                p={5}>Billing cycle</Text></Th>
                
                
                <Th><Text
                 fontSize='1.5rem'
                 fontWeight='400'
                 align='center'
                 color='black' ml={20}>Basic</Text></Th>
              </Tr>
            </Thead>
            <Tbody >
              <Tr  >
                <Td ><Text fontSize='1.5rem'
                 fontWeight='400'>1 Month</Text></Td>
                <Td>
                    <Text fontSize='1.5rem'
                 fontWeight='400'
                 color='#00AEEF'>Rs. 4,360</Text>
                    <Text>Rs. 4,360/mo</Text>
                </Td>
                <Td ><Button
                bg='#bdf300'
                borderRadius='30px'
                p='0.5rem 2rem'>BUY</Button></Td>
              </Tr>
              <Tr  >
                <Td><Text fontSize='1.5rem'
                 fontWeight='400'>3 Month</Text></Td>
                <Td><Text fontSize='1.5rem'
                 fontWeight='400'
                 color='#00AEEF'>Rs. 13,080</Text>
                    <Text>Rs. 4,360/mo</Text></Td>
                <Td ><Button
                bg='#bdf300'
                borderRadius='30px'
                p='0.5rem 2rem'>BUY</Button></Td>
              </Tr>
              <Tr>
                <Td><Text fontSize='1.5rem'
                 fontWeight='400'>1 Year</Text></Td>
                <Td><Text fontSize='1.5rem'
                 fontWeight='400'
                 color='#00AEEF'>Rs. 36,624</Text>
                    <Text>Rs. 3,052/mo</Text></Td>
                <Td ><Button
                bg='#bdf300'
                borderRadius='30px'
                p='0.5rem 2rem'
                >BUY</Button></Td>
              </Tr>
            </Tbody>
            
          </Table>
        </TableContainer>

        <Text
        align='left'
        fontFamily=' Montserrat,"Helvetica Neue",Verdana,"Helvetica CY","Nimbus Sans L",sans-serif'
        padding={5}
        ml='150px'
        mt={10}
        
        ><b>Terms and conditions</b></Text>
        <Text
        align='left'
        w='80%'
        m='auto'
        p={5}
        fontFamily=' Montserrat,"Helvetica Neue",Verdana,"Helvetica CY","Nimbus Sans L",sans-serif'

        >* Bitrix24 August Sale 2022 discounts are available for both Bitrix24 free plan subscribers and commercial plan subscribers (including archived plans). However, commercial plan subscribers can only upgrade to get the special offer discount (discounts are not valid for renewal).</Text>


        <Text mt={10} fontSize='4xl'>10,000,000+ organizations have chosen Bitrix24</Text>
        <br />
        <Link to=''>
                    <Button className='btn2'
                    bg='#a6f300'
                    colorScheme='blackAplha' 
                    fontSize='1rem'
                    fontWeight='700'
                    color='black'
                    borderRadius='30px'
                    p='0.5rem 1.25rem'
                    mb={10}
                    > REGISTER FREE</Button>
          </Link>





        <Footer />
    </div>
  )
}

export default Pricing