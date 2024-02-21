'use client'

import { allUsersQuery, useQuery } from '@clstr/graphql'
import { Auth } from '@components/a11n'
import { Header, Navbar } from '@components/shell'
import { FC } from 'react'

interface Props {}

export const SettingsView: FC<Props> = () => {
  const data = useQuery(allUsersQuery)

  return (
    <Auth>
      <Header></Header>
      <Navbar>Einstellungen</Navbar>
      <>
        {data.data?.users.map((user) => {
          return (
            <div key={user.id}>
              {user.firstname}
              {user.lastname}
            </div>
          )
        })}
      </>
    </Auth>
  )
}
