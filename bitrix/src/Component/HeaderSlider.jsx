import { Box, Button, Flex, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React, { useState } from 'react'
// import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function HeaderSlider() {

  const [x, setX] = useState(0)

  let data=[
    {
      n1: 'Chats & video calls',
      n2: ' Online meetings',
      n3: 'Feed',
      n4: 'Calendar',
      n5: 'Online documents',
      n6: 'Drive',
      n7: 'Webmail',
      n8: 'Workgroups',
      src: 'https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/header_banner/workspace.png.webp?1659420243000'
    },
    {
      n1: 'START FOR FREE',
      n2: ' Leads, Deals, Contacts',
      n3: 'Quotes, Invoices',
      n4: 'Online payments',
      n5: 'Sales automation',
      n6: 'Rules and triggers',
      n7: 'Contact center',
      n8: 'Marketing',
      src: 'https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/header_banner/crm.png.webp?1659420244000'
    },
    {
      n1: 'Tasks',
      n2: 'Projects',
      n3: 'Gantt chart',
      n4: 'Kanban board',
      n5: 'Time tracking',
      n6: 'Task and project templates',
      n7: 'Task automation',
      n8: 'CRM integration',
      src: 'https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/header_banner/tasks.png.webp?1659420246000'
    },
//     
    {
      n1: 'Free website builder',
      n2: 'Online store',
      n3: 'Free templates',
      n4: 'Mobile & SEO friendly',
      n5: 'Web forms',
      n6: 'Web widgets',
      n7: 'CRM integration',
      n8: 'Google Analytics integration',
      src:'https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/header_banner/sites.png.webp?1659420247000'
    },
    {
      n1: 'Employee directory',
      n2: 'Worktime tracking & reports',
      n3: 'Absence management',
      n4: 'Announcements & appreciations',
      n5: 'Workflow automation',
      n6: 'Requests & approvals',
      n7: 'No-code RPA',
      n8: 'Knowledge base',
      src:'https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/header_banner/hr.png.webp?1659420249000'
    }
   
  ]


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


        <Box w='70%' m='auto' mt={5} >
          <Flex justifyContent='space-around' borderRadius={5} bg='blue.50' p={1} gap={10}>
            <Text
            fontSize='2xl'
            color='#0d6efd'
            fontWeight='500'
            cursor='pointer'
            onClick={()=> setX(0)}
            _hover={{color:'#0053AA', textDecoration:'underline'}}

            >Collaboration</Text>

            <Text
             fontSize='2xl'
             color='#0d6efd'
             fontWeight='500'
             cursor='pointer'
             onClick={()=> setX(1)}
             _hover={{color:'#0053AA' ,textDecoration:'underline'}}
             >CRM</Text>

            <Text
             fontSize='2xl'
             color='#0d6efd'
             fontWeight='500'
             cursor='pointer'
             onClick={()=> setX(2)}
             _hover={{color:'#0053AA',textDecoration:'underline'}}
             > Tasks & Projects</Text>

            <Text fontSize='2xl'
            color='#0d6efd'
            fontWeight='500'
            cursor='pointer'
            onClick={()=> setX(3)}
            _hover={{color:'#0053AA',textDecoration:'underline'}}
            >Sites & Stores</Text>

            <Text fontSize='2xl'
            color='#0d6efd'
            fontWeight='500'
            cursor='pointer'
            onClick={()=> setX(4)}
            _hover={{color:'#0053AA',textDecoration:'underline'}}
            >HR & Automation</Text>
          </Flex>

          <hr style={{marginTop:'20px'}}/>

          <Flex mt={5}  justifyContent='space-around' gap='40px'>
            <Box p={5}>
                <UnorderedList spacing={2}>
                  <ListItem 
                  fontFamily='Montserrat,"Helvetica Neue",Verdana,"Helvetica CY","Nimbus Sans L",sans-serif;'
                  fontWeight='500' fontSize='1.25rem' textAlign='left'> {data[x].n1}</ListItem>
                  <ListItem 
                  fontFamily='Montserrat,"Helvetica Neue",Verdana,"Helvetica CY","Nimbus Sans L",sans-serif;'
                  fontWeight='500' fontSize='1.25rem' textAlign='left'>{data[x].n2}</ListItem>
                  <ListItem 
                  fontFamily='Montserrat,"Helvetica Neue",Verdana,"Helvetica CY","Nimbus Sans L",sans-serif;'
                  fontWeight='500' fontSize='1.25rem' textAlign='left'>{data[x].n3}</ListItem>
                  <ListItem 
                  fontFamily='Montserrat,"Helvetica Neue",Verdana,"Helvetica CY","Nimbus Sans L",sans-serif;'
                  fontWeight='500' fontSize='1.25rem' textAlign='left'>{data[x].n4}</ListItem>
                  <ListItem 
                  fontFamily='Montserrat,"Helvetica Neue",Verdana,"Helvetica CY","Nimbus Sans L",sans-serif;'
                  fontWeight='500' fontSize='1.25rem' textAlign='left'>{data[x].n5}</ListItem>
                  <ListItem 
                  fontFamily='Montserrat,"Helvetica Neue",Verdana,"Helvetica CY","Nimbus Sans L",sans-serif;'
                  fontWeight='500' fontSize='1.25rem' textAlign='left'>{data[x].n6}</ListItem>
                  <ListItem 
                  fontFamily='Montserrat,"Helvetica Neue",Verdana,"Helvetica CY","Nimbus Sans L",sans-serif;'
                  fontWeight='500' fontSize='1.25rem' textAlign='left'>{data[x].n7}</ListItem>
                  <ListItem 
                  fontFamily='Montserrat,"Helvetica Neue",Verdana,"Helvetica CY","Nimbus Sans L",sans-serif;'
                  fontWeight='500' fontSize='1.25rem' textAlign='left'>{data[x].n8}</ListItem>
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
                  <Image w='600px' src={data[x].src} />
              </Box>


          </Flex>


        </Box>





    </Box>
  )
}

export default HeaderSlider