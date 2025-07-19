'use client'

import { Box } from '@chakra-ui/react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Box>{children}</Box>
}
