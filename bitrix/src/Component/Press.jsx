import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

function Press() {
  return (
    <div>
        <Text fontSize='4xl'>Bitrix24 in the Press</Text>

        <SimpleGrid columns={[1,2,4,5]} ml='80px' >
            <Box>
                <Image w='160px' src='https://www.bitrix24.in/upload/optimizer/converted/images/content_en/press/icons/color_forbes.png.webp?1659434641000' />
            </Box>
            <Box>
            <Image w='160px' src='https://www.bitrix24.in/upload/optimizer/converted/images/content_en/press/icons/color_pcmag.png.webp?1659434641000' />

            </Box>
            <Box>
            <Image w='160px' src='https://www.bitrix24.in/upload/optimizer/converted/images/content_en/press/icons/color_pcworld.png.webp?1659434641000' />

            </Box>
            <Box>
            <Image w='160px' src='https://www.bitrix24.in/upload/optimizer/converted/images/content_en/press/icons/color_techradar.png.webp?1659434641000' />
            </Box>
            <Box>
            <Image w='160px' src='https://www.bitrix24.in/upload/optimizer/converted/images/content_en/press/icons/color_zdnet.png.webp?1659434641000' />
            </Box>
        </SimpleGrid>

    </div>
  )
}

export default Press