import { Auth } from '@components/a11n'
import { Header, Navbar } from '@components/shell'
import { Title } from '@mantine/core'
import { FC } from 'react'

interface Props {}

export const SettingsView: FC<Props> = () => {
  return (
    <Auth>
      <Header></Header>
      <Navbar>Einstellungen</Navbar>
      <>
        <Title fz={140}>Ich möchte gerne ein toller Entwickler sein!</Title>
      </>
    </Auth>
  )
}
