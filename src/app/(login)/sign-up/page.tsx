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

export default function SignUp() {
  return (
    <Box p={8}>
      <Stack spacing={4}>
        <Heading>Sign Up</Heading>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button colorScheme="teal">Sign up</Button>
      </Stack>
    </Box>
  )
}
