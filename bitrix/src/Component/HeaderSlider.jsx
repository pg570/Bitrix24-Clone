import { Box, Button, Flex, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function HeaderSlider() {
  return (
    <Box h='auto' 
    p='53px 15px 44px'
    bgPos='70% 20%'
    bgImage='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwNiIgaGVpZ2h0PSIxMTk2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIG9wYWNpdHk9Ii4xNjIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOTI5LjQ2OSAxMTUuMDMyYzk1LjUzMSAxNy42MzEgMTcxLjcxMSAzNC45NDUgMjU2LjEyMSA3Ny40MDggOTYuMzIgNDguNDU2IDE0OS4yIDEzNy4yNTkgMTY2LjYzIDIwNy4wMDMgMTcuNDMgNjkuNzQ1IDEyLjE4IDE1OC4wNy00NC40IDIzMy4xODctNTAuNzYgNjcuMzcyLTEwMS42OSA5OC4wNjYtMTg3LjY2IDEzNC44MDYtODUuNDIgMzYuNTAzLTE4MC40NjEgNzEuODE5LTI3Ny4zIDUyLjk3NS05My45OS0xOC4yODctMTQyLjE0Ni0xMDEuNzM5LTIyMC4zOTgtMTQ5LjgxOC05My42MDktNTcuNTEzLTI2NC4zNTEtNjUuOTUxLTI4Mi4wMDctMTU4Ljg1Ni0xOC4wMTktOTQuODI0IDE2MS43ODktMTI1Ljg3MiAyMTEuOTU2LTIwOS43NjYgNDcuNDM4LTc5LjMzMi0yNi4xMjMtMjA5LjQ4IDY2LjA3LTI1NS4xODggOTAuODItNDUuMDI3IDIwMy44NjEgNDguNDc3IDMxMC45ODggNjguMjQ5eiIgZmlsbD0iIzJGQzZGNiIvPjxwYXRoIG9wYWNpdHk9Ii4xODYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjE4LjMzNSAxMDg3LjA5Yy05MS41MyAzNC40NC0xOTIuNjQxIDg4LjI1LTI4Mi42MTkgNjYuNDUtOTAuMDEyLTIxLjgxLTEwNy45OTgtMTA2LjE0LTE0NC4yNTQtMTY5Ljg2LTMzLjc1Ni01OS4zMjctNzcuNDQ4LTExOS4wODQtNTguMjczLTE4Ni4wNzkgMTguOTktNjYuMzUxIDgyLjk1Ny0xMjYuNTA5IDE1OS43NTQtMTY4LjQ4MSA2OS4wMjQtMzcuNzI0IDE1NC40NDMtNDIuMzc0IDIzNi4xOS00Ny45MTggNzAuMjY4LTQuNzY2IDEzNC4zNTYgNS40NTYgMTk5LjkzMSAxOC4zMzcgNzcuMDg3IDE1LjE0MiAxNjEuNzQxIDIxLjI4NiAyMTQuNTUgNjMuMDc5IDYxLjY4NiA0OC44MTYgMTI5LjY0NiAxMTUuMzg2IDk4LjIxNiAxODQuNDQzLTMxLjg5IDcwLjA3MS0xNjAuNTg5IDg1LjY1NC0yNDIuMjExIDEzMS45MTUtNjMuMTI5IDM1Ljc4NC0xMTAuOTg5IDgxLjY2NC0xODEuMjg0IDEwOC4xMTR6IiBmaWxsPSIjQjNFNjAwIi8+PHBhdGggb3BhY2l0eT0iLjEyMiIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzY2Ljk4OCA5MTcuMTI0Yy03MS45MDIgMTAuNjQ2LTE0Ni4xNzctMTEuMDM2LTIwNS4xNjgtNDUuMTA4LTU3Ljk1Mi0zMy40NzItOTAuODQzLTg2LjIxLTExNS45NDMtMTQwLjM2QzIwLjQwNSA2NzYuNzA3LTEuNTc4IDYxOC4wMDggMTcuNTkgNTYwLjg3M2MxOS4zNTktNTcuNzAxIDczLjE3MS0xMDIuOTA0IDEzMi4yMTgtMTM5LjAwMSA1OC4wNTQtMzUuNDg5IDEyNS41MzMtNjIuNDc2IDE5Ny42OTctNjIuNjg0IDcwLjU0LS4yMDMgMTM0LjIwNyAyOC4xNSAxOTAuODgzIDYxLjU2NyA1NC44MTggMzIuMzIxIDExNCA3MC4yODYgMTI1LjE3NSAxMjQuNzg1IDEwLjczOCA1Mi4zNjUtNDUuMjM4IDk2LjI2LTY5LjY2MyAxNDUuOTMxLTIxLjI3OCA0My4yNzEtMjcuNzA5IDg5Ljg4Ny02NC4wODIgMTI2LjA1OC00NC4wNTkgNDMuODE1LTk0LjYwNSA4OS40OTQtMTYyLjgzIDk5LjU5NXoiIHN0cm9rZT0iIzU1RDBFMCIgc3Ryb2tlLXdpZHRoPSIzIi8+PC9zdmc+'>
        

        <Text
        fontSize='2.875rem'
        fontWeight='700'
        color='#262626'
        fontFamily='Montserrat,"Helvetica Neue",Verdana,"Helvetica CY","Nimbus Sans L",sans-serif'
        >Bitrix24. Your ultimate workspace.</Text>


        <Box w='70%' m='auto' mt={5}>
          <Flex justifyContent='space-around ' gap={10}>
            <Text
            fontSize='2xl'
            color='#0d6efd'
            fontWeight='500'
            cursor='pointer'
            
            _hover={{color:'#0053AA', textDecoration:'underline'}}

            >Collaboration</Text>

            <Text
             fontSize='2xl'
             color='#0d6efd'
             fontWeight='500'
             cursor='pointer'
             
             _hover={{color:'#0053AA' ,textDecoration:'underline'}}
             >CRM</Text>

            <Text
             fontSize='2xl'
             color='#0d6efd'
             fontWeight='500'
             cursor='pointer'
             
             _hover={{color:'#0053AA',textDecoration:'underline'}}
             > Tasks & Projects</Text>

            <Text fontSize='2xl'
            color='#0d6efd'
            fontWeight='500'
            cursor='pointer'
            
            _hover={{color:'#0053AA',textDecoration:'underline'}}
            >Sites & Stores</Text>

            <Text fontSize='2xl'
            color='#0d6efd'
            fontWeight='500'
            cursor='pointer'
            
            _hover={{color:'#0053AA',textDecoration:'underline'}}
            >HR & Automation</Text>
          </Flex>

          <hr style={{marginTop:'20px'}}/>

          <Flex mt={5}  justifyContent='space-around' gap='20px'>
            <Box p={5}>
                <UnorderedList spacing={2}>
                  <ListItem 
                  fontFamily='Montserrat,"Helvetica Neue",Verdana,"Helvetica CY","Nimbus Sans L",sans-serif;'
                  fontWeight='500' fontSize='1.25rem' textAlign='left'> Chats & video calls</ListItem>
                  <ListItem 
                  fontFamily='Montserrat,"Helvetica Neue",Verdana,"Helvetica CY","Nimbus Sans L",sans-serif;'
                  fontWeight='500' fontSize='1.25rem' textAlign='left'>Online meetings</ListItem>
                  <ListItem 
                  fontFamily='Montserrat,"Helvetica Neue",Verdana,"Helvetica CY","Nimbus Sans L",sans-serif;'
                  fontWeight='500' fontSize='1.25rem' textAlign='left'>Feed</ListItem>
                  <ListItem 
                  fontFamily='Montserrat,"Helvetica Neue",Verdana,"Helvetica CY","Nimbus Sans L",sans-serif;'
                  fontWeight='500' fontSize='1.25rem' textAlign='left'>Calendar</ListItem>
                  <ListItem 
                  fontFamily='Montserrat,"Helvetica Neue",Verdana,"Helvetica CY","Nimbus Sans L",sans-serif;'
                  fontWeight='500' fontSize='1.25rem' textAlign='left'>Online Documents</ListItem>
                  <ListItem 
                  fontFamily='Montserrat,"Helvetica Neue",Verdana,"Helvetica CY","Nimbus Sans L",sans-serif;'
                  fontWeight='500' fontSize='1.25rem' textAlign='left'>Drive</ListItem>
                  <ListItem 
                  fontFamily='Montserrat,"Helvetica Neue",Verdana,"Helvetica CY","Nimbus Sans L",sans-serif;'
                  fontWeight='500' fontSize='1.25rem' textAlign='left'>Webmail</ListItem>
                  <ListItem 
                  fontFamily='Montserrat,"Helvetica Neue",Verdana,"Helvetica CY","Nimbus Sans L",sans-serif;'
                  fontWeight='500' fontSize='1.25rem' textAlign='left'>Workgroups</ListItem>
                </UnorderedList>


                <Link to=''>
                <Button
                bg='#a6f300'
                fontSize='1.2rem'
                fontWeight='650'
                color='black'
                borderRadius='30px'
                p=' 1.5rem 3rem'
                mt={5}
                _hover={{backgroundColor:'#BDF300'}}
                > START FOR FREE</Button>
                </Link>


            </Box>

              <Box p={5}>
                  <Image w='600px' src='https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/header_banner/workspace.png.webp?1659420243000' />
              </Box>


          </Flex>


        </Box>





    </Box>
  )
}

export default HeaderSlider