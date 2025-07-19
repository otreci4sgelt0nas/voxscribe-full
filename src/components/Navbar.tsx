'use client'

import { Box, Flex, Heading, Spacer, Button } from '@chakra-ui/react'
import Link from 'next/link'
import { useUser } from '@/lib/hooks'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const { user, mutate } = useUser()
  const router = useRouter()

  const handleLogout = async () => {
    await fetch('/api/logout')
    mutate({ ...user, isLoggedIn: false })
    router.push('/')
  }

  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="teal.500" color="white">
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
          <Link href="/">Voxcribe</Link>
        </Heading>
      </Flex>
      <Spacer />
      <Box>
        {user?.isLoggedIn ? (
          <>
            <Button as={Link} href="/dashboard" variant="ghost" mr={4}>
              Dashboard
            </Button>
            <Button onClick={handleLogout} variant="outline">
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button as={Link} href="/sign-in" variant="ghost" mr={4}>
              Sign In
            </Button>
            <Button as={Link} href="/sign-up" variant="outline">
              Sign Up
            </Button>
          </>
        )}
      </Box>
    </Flex>
  )
}
