'use client'

import Link from 'next/link'
import { useInitials } from '@hooks/use-initials'
import {
  ActionIcon,
  AppShellHeader,
  Avatar,
  Button,
  Flex,
  Group,
  Menu,
  MenuDivider,
  MenuDropdown,
  MenuItem,
  MenuLabel,
  MenuTarget,
  Popover,
  PopoverDropdown,
  PopoverTarget,
  Text,
  UnstyledButton
} from '@mantine/core'
import { signIn, signOut, useSession } from 'next-auth/react'
import { FC, ReactNode } from 'react'
import { IconBell } from '@tabler/icons-react'

interface Props {
  leftSection?: ReactNode
  rightSection?: ReactNode
}

export const Header: FC<Props> = ({ leftSection, rightSection }) => {
  const { data: session, status } = useSession()
  const initials = useInitials(session?.user?.name || '')

  return (
    <AppShellHeader withBorder={false}>
      <Flex
        px='xl'
        direction='row'
        justify={leftSection ? 'space-between' : 'right'}
        h='100%'
      >
        {leftSection}
        <Group>
          {rightSection}
          {status === 'loading' ? null : session?.user ? (
            <>
              <Popover
                withinPortal
                width={300}
                trapFocus
                position='bottom-end'
                withArrow
                arrowOffset={10}
                shadow='md'
              >
                <PopoverTarget>
                  <ActionIcon variant='subtle'>
                    <IconBell></IconBell>
                  </ActionIcon>
                </PopoverTarget>
                <PopoverDropdown>
                  <Text>Ach komm, geh weg!</Text>
                </PopoverDropdown>
              </Popover>
              <Menu withinPortal width={200} position='bottom-end'>
                <MenuTarget>
                  <UnstyledButton>
                    <Avatar src={session.user.image}>{initials}</Avatar>
                  </UnstyledButton>
                </MenuTarget>
                <MenuDropdown>
                  <MenuLabel>logged in as {session.user.name}</MenuLabel>
                  <MenuItem component={Link} href='/profile'>
                    Profile
                  </MenuItem>
                  <MenuItem component={Link} href='/settings'>
                    Settings
                  </MenuItem>
                  <MenuDivider></MenuDivider>
                  <MenuItem onClick={() => signOut()}>Sign out</MenuItem>
                </MenuDropdown>
              </Menu>
            </>
          ) : (
            <Button onClick={() => signIn()}>Sign in</Button>
          )}
        </Group>
      </Flex>
    </AppShellHeader>
  )
}
