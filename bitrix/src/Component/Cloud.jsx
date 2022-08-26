import { Text } from '@chakra-ui/react'
import React from 'react'

function Cloud() {
  return (
    <div style={{height:'18vh', backgroundColor:'#409eef',
    display:'flex', justifyContent:'center',alignItems:'center',gap:'20px',color:'white'
    }}>

        <Text fontSize='3xl'><i class="fa-solid fa-cloud"></i>10,000,000</Text>
        <Text fontSize='3xl'>organizations have chosen Bitrix24</Text>
        <Text fontSize='3xl'><i class="fa-solid fa-earth-americas"></i>  avialable in</Text>
        <Text fontSize='3xl'>18 languages</Text>

    </div>
  )
}

export default Cloud