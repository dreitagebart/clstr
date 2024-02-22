'use client'

import { allUsersQuery } from '@clstr/graphql'
import { useSuspenseQuery } from '@clstr/graphql/ssr'
import { Auth } from '@components/a11n'
import { Header, Navbar } from '@components/shell'
import { Group, Text } from '@mantine/core'
import { FC } from 'react'

interface Props {}

export const SettingsView: FC<Props> = () => {
  const { data, error } = useSuspenseQuery(allUsersQuery)

  return (
    <Auth>
      <Header></Header>
      <Navbar>Einstellungen</Navbar>
      <>
        {data?.users.map((user) => {
          return (
            <Group key={user.id}>
              <Text>{user.firstname}</Text>
              <Text>{user.lastname}</Text>
            </Group>
          )
        })}
      </>
    </Auth>
  )
}
