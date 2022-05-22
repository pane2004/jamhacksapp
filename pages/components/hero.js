import React from 'react'
import { Box, Image, VStack, Center, Text } from '@chakra-ui/react';

export default function hero() {
  return (
    <Center position="absolute">
        <VStack>
            <Text pt={150} fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, yellow.400, blue.500)" bgClip='text'>Ukraine Crisis Response</Text>
            <Text fontWeight="semibold">Help children and families affected by the crisis in Ukraine.</Text>
            <Box  boxSize='sm'>
                <Image m={4} src='https://www.worldvision.ca/WorldVisionCanada/media/site-images/wv-logo.svg'/>
            </Box>
        </VStack>
    </Center >
  )
}
