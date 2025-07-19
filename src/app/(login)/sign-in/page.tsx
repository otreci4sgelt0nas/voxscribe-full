'use client'

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
} from '@chakra-ui/react'

export default function SignIn() {
  return (
    <Box p={8}>
      <Stack spacing={4}>
        <Heading>Sign In</Heading>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button colorScheme="teal">Sign in</Button>
      </Stack>
    </Box>
  )
}
