import { AppShellNavbar } from '@mantine/core'
import { FC, PropsWithChildren } from 'react'

import classes from './navbar.module.css'

export const Navbar: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AppShellNavbar
      classNames={{
        navbar: classes.navbar
      }}
      withBorder={false}
    >
      {children}
    </AppShellNavbar>
  )
}
