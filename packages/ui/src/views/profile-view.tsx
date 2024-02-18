import { Auth } from '@components/a11n'
import { Header, Navbar } from '@components/shell'
import { FC } from 'react'

interface Props {}

export const ProfileView: FC<Props> = () => {
  return (
    <>
      <Auth>
        <Header></Header>
        <Navbar>Profile</Navbar>
      </Auth>
    </>
  )
}
