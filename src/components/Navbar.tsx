'use client'

import { Box, Flex, Heading, Spacer, Button } from '@chakra-ui/react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="teal.500" color="white">
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
          <Link href="/">Voxcribe</Link>
        </Heading>
      </Flex>
      <Spacer />
      <Box>
        <Button as={Link} href="/dashboard" variant="ghost" mr={4}>
          Dashboard
        </Button>
        <Button as={Link} href="/sign-in" variant="ghost" mr={4}>
          Sign In
        </Button>
        <Button as={Link} href="/sign-up" variant="outline">
          Sign Up
        </Button>
      </Box>
    </Flex>
  )
}
