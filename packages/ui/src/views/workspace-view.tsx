import { Header, Navbar } from '@components/shell'
import { Text } from '@mantine/core'
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
        <Text>{joke.value}</Text>
      </>
    </>
  )
}
