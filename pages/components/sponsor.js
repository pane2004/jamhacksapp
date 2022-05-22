import React from 'react'
import { Box, Image, VStack, Text } from '@chakra-ui/react';

export default function sponsor() {
  return (
    <VStack pt={600} position="absolute">
        <Text>Powered By: </Text>
        <Box boxSize='200px'>
            <Image src='https://cdn.shopify.com/s/files/1/0602/6421/8805/files/6148aea00f7f900364e37426_deso-logo-blackpng.png?v=1632958881' alt='Dan Abramov' />
        </Box>
    </VStack>
  )
}
