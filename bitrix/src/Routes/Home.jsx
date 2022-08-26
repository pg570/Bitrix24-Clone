// import { Text } from '@chakra-ui/react'
import React from 'react'
import Cloud from '../Component/Cloud'
import Footer from '../Component/Footer'
import Navbar from '../Component/Navbar'
import Much from '../Component/Much'
import Premisehome from '../Component/Premisehome'
import Press from '../Component/Press'

function Home() {
  return (
    <div>
  
        <Navbar />
        <Cloud />
        <Much />
        <Press />
        <hr />
        <Premisehome />

        <Footer />



    </div>
  )
}

export default Home