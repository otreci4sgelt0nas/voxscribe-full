'use client'

import { Box, Flex, Heading, Spacer } from '@chakra-ui/react'

export default function Navbar() {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="teal.500" color="white">
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
          Voxcribe
        </Heading>
      </Flex>
      <Spacer />
    </Flex>
  )
}
