'use client'

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  useToast,
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SignIn() {
  const router = useRouter()
  const toast = useToast()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

    const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitting form with:', { email, password })
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })

    if (res.ok) {
      router.push('/dashboard')
    } else {
      toast({
        title: 'Error',
        description: 'Invalid credentials',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    console.log('Login response:', res)
    }
  }

  return (
    <Box p={8}>
      <form onSubmit={handleLogin}>
        <Stack spacing={4}>
          <Heading>Sign In</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="teal">
            Sign in
          </Button>
        </Stack>
      </form>
    </Box>
  )
}
