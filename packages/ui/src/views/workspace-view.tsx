import Link from 'next/link'
import { Header, Navbar } from '@components/shell'
import {
  Box,
  Group,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  Text,
  Title,
  UnstyledButton
} from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'
import { WorkspaceNavbar } from '@components/navbars'

const getJoke = async () => {
  const response = await fetch('https://api.chucknorris.io/jokes/random', {
    cache: 'no-cache'
  })

  if (!response.ok) {
    throw new Error('Joke could not be fetched')
  }

  return response.json()
}

export const WorkspaceView = async () => {
  const joke = await getJoke()

  return (
    <>
      <Header></Header>
      <Navbar>
        <WorkspaceNavbar></WorkspaceNavbar>
      </Navbar>
      <>
        <Title>{joke.value}</Title>
      </>
    </>
  )
}
