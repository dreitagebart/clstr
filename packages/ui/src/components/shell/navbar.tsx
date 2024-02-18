import { AppShellNavbar } from '@mantine/core'
import { FC, PropsWithChildren } from 'react'

export const Navbar: FC<PropsWithChildren> = ({ children }) => {
  return <AppShellNavbar withBorder={false}>{children}</AppShellNavbar>
}
