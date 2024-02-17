import { Header, Navbar } from '@components/shell'
import { Button, Group, Title } from '@mantine/core'

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
        <Title order={4}>Chuck Norris</Title>
        <Group>
          <Button>Test</Button>
        </Group>
      </Navbar>
      <>
        <Title>{joke.value}</Title>
      </>
    </>
  )
}
