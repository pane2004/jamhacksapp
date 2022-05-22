import Header from "./components/header"
import Hero from "./components/hero"
import Slider from "./components/slider"
import Deso from "./components/sponsor"
if (typeof window !== 'undefined') {
  console.log('You are on the browser')
  // 👉️ can use localStorage here
} else {
  console.log('You are on the server')
  // 👉️ can't use localStorage
}

import { Box, Image, VStack, Center, Text } from '@chakra-ui/react';

export default function Home() {
  return (
      <VStack >
        <Header/>
        <Hero/>
        <Slider/>
        <Deso/>
      </VStack>
  )
}
